# Generated by Django 2.2.12 on 2020-09-17 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=50, unique=True, verbose_name='昵称')),
                ('password', models.CharField(max_length=64, verbose_name='密码')),
                ('mailbox', models.EmailField(max_length=20, verbose_name='邮箱')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='注册时间')),
                ('real_name', models.CharField(max_length=50, verbose_name='真实姓名')),
                ('birthday', models.DateField(verbose_name='生日')),
                ('avatar', models.ImageField(default='', upload_to='avatar', verbose_name='头像')),
                ('gender', models.CharField(max_length=5, verbose_name='性别')),
                ('motto', models.TextField(verbose_name='个性签名')),
                ('QQ_number', models.CharField(max_length=15, verbose_name='QQ')),
                ('profession', models.CharField(max_length=50, verbose_name='职业')),
                ('school', models.CharField(max_length=100, verbose_name='毕业院校')),
                ('tel', models.CharField(max_length=11, verbose_name='电话号码')),
            ],
            options={
                'db_table': 'User',
            },
        ),
    ]
