from django.urls import path
from . import views

urlpatterns = [
    path('send_microblog', views.send_microblog_view),  # 发表博客
]
