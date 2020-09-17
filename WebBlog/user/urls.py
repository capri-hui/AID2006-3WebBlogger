from django.urls import path
from . import views

urlpatterns = [
    path('register', views.register_view),  # 注册
    path('login', views.login_view),  # 登录
    path('logout', views.logout_view),  # 退出
    path('person_info', views.person_info_view),  # 修改用户信息
    path('avatar', views.avatar_view),  # 修改用户头像
]
