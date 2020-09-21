from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from .models import Blog


# Create your views here.
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


# 登录检查
@login_check
def send_microblog_view(request):
    if request.method == 'GET':
        return render(request, 'blog/send_microblog.html')
    elif request.method == 'POST':
        title = request.POST.get('title', '')
        content = request.POST.get('content', '')
        pictures = request.FILES.get('pictures')
        userid = request.session['userid']
        if not title and not content and not pictures:
            return HttpResponse('请输入内容！')
        Blog.objects.create(title=title, content=content, pictures=pictures, user_id=userid)
        return HttpResponse('发表成功！')
