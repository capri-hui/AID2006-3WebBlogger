from django.urls import path
from . import views

urlpatterns = [
    path('register', views.register_view),  # 注册
    path('login', views.login_view),  # 登录
    path('logout', views.logout_view),  # 退出
    path('update_person_info', views.update_person_info_view),  # 修改用户信息
    path('avatar', views.avatar_view),  # 修改用户头像
    path('forget_password', views.forget_password_view),  # 忘记密码
    path('reset_password', views.reset_password_view),  # 重置密码
]
