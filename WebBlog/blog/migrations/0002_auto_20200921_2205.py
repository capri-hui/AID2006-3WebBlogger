# Generated by Django 2.2.12 on 2020-09-21 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='liked_time',
            field=models.IntegerField(default=0, verbose_name='被点赞次数'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='remarked_times',
            field=models.IntegerField(default=0, verbose_name='被评论次数'),
        ),
    ]
