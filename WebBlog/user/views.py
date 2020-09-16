from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from .models import User
import hashlib


# Create your views here.
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
            user = User.objects.create(nickname=nickname, password=password_h, mailbox=mailbox)
        except Exception as e:
            print(f'Error is {e}.')
            return HttpResponse('该用户已存在!')
        return HttpResponse('注册成功,欢迎使用!')


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


def logout_view(request):
    pass
