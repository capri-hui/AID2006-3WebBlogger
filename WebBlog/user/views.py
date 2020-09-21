from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from user.models import User
import hashlib


# Create your views here.
# 注册视图
def register_view(request):
    if request.method == 'GET':
        return render(request, 'user/register.html')
    elif request.method == 'POST':
        # 获取表单的值
        nickname = request.POST['nickname']
        password_1 = request.POST['password_1']
        password_2 = request.POST['password_2']
        mailbox = request.POST['mailbox']
        # 非空检查
        if not nickname or not password_1 or not mailbox:
            return HttpResponse('用户名或密码或邮箱不能为空!请重新输入!')
        # 密码一致性检查
        if password_1 != password_2:
            return HttpResponse('密码不一致!请重新输入!')
        # 用户昵称重复检查
        old_nickname = User.objects.filter(nickname=nickname)
        if old_nickname:
            return HttpResponse('该昵称已存在!请重新输入!')
        # 计算密码的hash值
        sha2 = hashlib.sha256()
        sha2.update(password_1.encode())
        password_h = sha2.hexdigest()
        try:
            user = User.objects.create(nickname=nickname.replace(' ', ''), password=password_h, mailbox=mailbox)
        except Exception as e:
            print(f'Error is {e}.')
            return HttpResponse('该用户已存在!')
        return HttpResponse('注册成功,欢迎使用!')


# 登录视图
def login_view(request):
    if request.method == 'GET':
        # 登录检查
        # 如果用户登录过,会将登录信息(username和userid)保存到session中
        # session是类字典结构
        if 'username' in request.session and 'userid' in request.session:
            return HttpResponse('已登录!请勿重复登录!')
        username = request.COOKIES.get('username')
        userid = request.COOKIES.get('userid')
        # 如果cookies中有登录状态的数据,回写session
        if username and userid:
            request.session['username'] = username
            request.session['userid'] = userid
            return HttpResponse('已登录!请勿重复登录!')
        return render(request, 'user/login.html')
    elif request.method == 'POST':
        nickname = request.POST['nickname']
        password = request.POST['password']
        try:
            old_user = User.objects.get(nickname=nickname)
        except Exception as e:
            print(f'登录失败,{e}!')
            return HttpResponse('用户名或密码错误!')
        sha2 = hashlib.sha256()
        sha2.update(password.encode())
        password_h = sha2.hexdigest()
        if password_h != old_user.password:
            return HttpResponse('用户名或密码错误!')
        # 在session中记录用户的登录状态
        request.session['userid'] = old_user.id
        request.session['username'] = old_user.nickname
        response = HttpResponseRedirect('/index')
        # 如果用户选择记住我,在cookies中保存用户的登录状态
        if 'remember' in request.POST:
            response.set_cookie('userid', old_user.id, 3600 * 24 * 3)
            response.set_cookie('username', old_user.nickname, 3600 * 24 * 3)
        return response


# 退出视图
def logout_view(request):
    # cookies和session都清除掉
    if 'username' in request.session:
        del request.session['username']
    if 'userid' in request.session:
        del request.session['userid']
    response = HttpResponse('已成功退出!')
    if 'username' in request.COOKIES:
        response.delete_cookie('username')
    if 'userid' in request.COOKIES:
        response.delete_cookie('userid')
    return response


def login_check(fn):
    def wrap(request, *args, **kwargs):
        # 首先检查session
        if 'username' not in request.session or 'userid' not in request.session:
            # 然后检查cookies
            c_username = request.COOKIES.get('username')
            c_userid = request.COOKIES.get('userid')
            if not c_username or not c_userid:
                # 跳转到登录页面
                return HttpResponseRedirect('/user/login')
            else:
                request.session['username'] = c_username
                request.session['userid'] = c_userid
        return fn(request, *args, **kwargs)

    return wrap


# 修改个人信息视图
# 登录检查
@login_check
def update_person_info_view(request):
    if request.method == 'GET':
        return render(request, 'user/update_person_info.html')
    elif request.method == 'POST':
        userid = request.session['userid']
        now_user = User.objects.get(id=userid)
        now_user.real_name = request.POST['real_name']
        now_user.birthday = request.POST['birthday']
        now_user.gender = request.POST['gender']
        now_user.motto = request.POST['motto']
        now_user.QQ_number = request.POST['QQ_number']
        now_user.profession = request.POST['profession']
        now_user.school = request.POST['school']
        now_user.tel = request.POST['phone_number']
        now_user.save()
        return HttpResponse('个人信息修改成功!')


@login_check
# 上传头像
def avatar_view(request):
    if request.method == 'GET':
        return render(request, 'user/avatar.html')
    elif request.method == 'POST':
        userid = request.session['userid']
        now_user = User.objects.get(id=userid)
        now_user.avatar = request.FILES['avatar']
        now_user.save()
        return HttpResponse('上传成功!')
