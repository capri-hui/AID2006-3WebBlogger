from socket import *
from select import *

# 创建监听套接字
sockfd = socket()
sockfd.bind(('0.0.0.0', 8957))
sockfd.listen(7)
# 设置非阻塞IO,防止传输过程阻塞
sockfd.setblocking(False)
# 创建poll对象
p = poll()
# 准备IO监控
p.register(sockfd, POLLIN)
dict = {sockfd.fileno(): sockfd}  # 用于查找IO对象,必须与register一致
while True:
    # 开始监控
    events = p.poll()
    for fd, event in events:
        if fd == sockfd.fileno():
            connfd, addr = dict[fd].accept()
            print("Connect by", addr)
            connfd.setblocking(False)
            p.register(connfd, POLLIN)  # 增加监控
            dict[connfd.fileno()] = connfd  # 维护字典
        elif event == POLLIN:
            # 某个客户端给我发消息
            data = dict[fd].recv(1024).decode()
            if not data:
                # 客户端退出
                p.unregister(fd)
                dict[fd].close()
                del dict[fd]
                continue
            print(data)
            dict[fd].send(b"ok")
