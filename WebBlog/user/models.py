from django.db import models


# Create your models here.
class User(models.Model):
    nickname = models.CharField('昵称', max_length=50, unique=True)
    password = models.CharField('密码', max_length=64)
    mailbox = models.EmailField('邮箱', max_length=20)
    created_time = models.DateTimeField('注册时间', auto_now_add=True)
    real_name = models.CharField('真实姓名', max_length=50)
    birthday = models.DateField('生日',auto_now_add=True)
    avatar = models.ImageField('头像', upload_to='avatar', default='')
    gender = models.CharField('性别', max_length=5)
    motto = models.TextField('个性签名')
    QQ_number = models.CharField('QQ', max_length=15)
    profession = models.CharField('职业', max_length=50)
    school = models.CharField('毕业院校', max_length=100)
    tel = models.CharField('电话号码', max_length=11)

    def __str__(self):
        return f'{self.nickname}-{self.mailbox}'

    class Meta:
        db_table = 'User'
