from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# 1:1 Model, AbstractBaseUser, AbstractUser가 있는데 1:1로 우선 진행.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    # primary_key : User의 pk로 설정하여 통합적으로 관리
    nickname = models.CharField(max_length=128)
    position = models.CharField(max_length=128)
    subjects = models.CharField(max_length=128)
    image = models.ImageField(upload_to='profile/', default='default.png')
    print("class Profile")

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    print("def create_user_profile")

    if created:
        Profile.objects.create(user=instance)
        print("    if created:")
