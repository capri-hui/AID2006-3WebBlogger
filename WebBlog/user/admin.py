from django.contrib import admin

# Register your models here.
from .models import *


class UserManager(admin.ModelAdmin):
    list_display = ['id', 'nickname', 'mailbox']


admin.site.register(User, UserManager)
