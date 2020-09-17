from django.http import HttpResponse


def index_view(request):
    return HttpResponse('这是首页,火箭飞走了...')
