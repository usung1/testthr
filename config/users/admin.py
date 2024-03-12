from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Profile
from django.contrib.auth.models import User 

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = "profile"

class UserAdmin(BaseUserAdmin):     # 기존의 UserAdmin을 상속 받음.
    inlines = (ProfileInline, )

admin.site.unregister(User)
admin.site.register(User, UserAdmin)