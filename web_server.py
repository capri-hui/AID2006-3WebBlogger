"""
web server程序
完成一个类,提供给使用者
让使用者可以快速搭建web服务器,搭建自己的网页
"""
from socket import *
from select import *
import re


# 1. 搭建并发服务  2. 实现http功能
class WebServer:
    def __init__(self, host="0.0.0.0", port=80, html=None):
        self.host = host
        self.port = port
        self.html = html  # 网页根目录
        self.rlist = []
        self.wlist = []
        self.xlist = []
        # 搭建服务准备工作
        self.create_socket()
        self.bind()

    def create_socket(self):
        self.tcp = socket()
        self.tcp.setblocking(False)

    def bind(self):
        self.address = (self.host, self.port)
        self.tcp.bind(self.address)

    # 启动服务端开始监听客户端连接
    def run(self):
        self.tcp.listen(7)
        print("Get port:%d" % self.port)
        # 循环监控 初始监控监听socket
        self.rlist.append(self.tcp)
        while True:
            # 开始监控IO
            rs, ws, xs = select(self.rlist, self.wlist, self.xlist)
            # 伴随监控IO的增多,就绪的IO情况也会复杂
            # 分类讨论 分两类   socketfd -- connfd
            for r in rs:
                # 有客户端连接
                if r is self.tcp:
                    connfd, addr = r.accept()
                    print("Connect by", addr)
                    connfd.setblocking(False)
                    self.rlist.append(connfd)  # 增加监控
                else:
                    try:
                        # 收到http请求
                        self.handle(r)
                    except:
                        r.close()
                        self.rlist.remove(r)

    def handle(self, connfd):
        # 接收浏览器请求
        request = connfd.recv(1024 * 10).decode()
        # 解析请求 --> 获取请求内容
        pattern = "[A-Z]+\s+(?P<info>/\S*)"
        result = re.match(pattern, request)
        if result:
            # 匹配到内容 --> 请求内容
            info = result.group("info")
            print("请求内容:", info)
            self.send_html(connfd, info)  # 发送响应数据
        else:
            # 没有匹配到内容,认为客户端离开
            connfd.close()
            self.rlist.remove(connfd)
            return

    # 根据请求发送相应数据
    def send_html(self, connfd, info):
        if info == "/":
            filename = self.html + "/index.html"
        else:
            filename = self.html + info
        try:
            file = open(filename, "rb")
        except:
            # 文件不存在
            response = "HTTP/1.1 404 Not Found\r\n"
            response += "Content-Type:text/html\r\n"
            response += "\r\n"
            response += "<h1>Sorry...</h1>"
            response = response.encode()
        else:
            data = file.read()
            response = "HTTP/1.1 200 OK\r\n"
            response += "Content-Type:text/html\r\n"
            response += "Content-Length:%d\r\n" % len(data)
            response += "\r\n"
            response = response.encode() + data
        finally:
            connfd.send(response)


if __name__ == '__main__':
    # 怎么用?
    # 需要用户自己确定什么?
    # html文件 地址

    # 实例化对象
    http = WebServer(host="0.0.0.0", port=7777, html="./static")
    # 启动服务
    http.run()
