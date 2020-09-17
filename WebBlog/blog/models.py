from django.db import models
from user.models import User


# Create your models here.
class Blog(models.Model):
    # 博客标题
    title = models.CharField('标题', max_length=100)
    # 博客内容
    content = models.TextField()
    # 创建时间
    created_time = models.DateTimeField('创建时间', auto_now_add=True)
    # 修改时间
    updated_time = models.DateTimeField('更新时间', auto_now_add=True)
    # 用户ID
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # 被评论次数
    remarked_times = models.IntegerField('被评论次数')
    # 被点赞次数
    liked_time = models.IntegerField('被点赞次数')
    # 插入图片
    pictures = models.ImageField('图片')

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'Blog'


class Comments(models.Model):
    # 评论内容
    content = models.CharField("评论内容", max_length=300)
    # 评论时间
    time = models.DateTimeField('评论时间', auto_now_add=True)
    # 被评论的博客
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    # 评论用户的ID
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content

    class Meta:
        db_table = "Comments"