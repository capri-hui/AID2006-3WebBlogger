"""
http
"""
from socket import *

tcp = socket()
tcp.bind(("0.0.0.0", 8957))
tcp.listen(7)
connfd, addr = tcp.accept()
data = connfd.recv(1024 * 10)
print(data.decode())
html = "HTTP/1.1 200 OK\r\n"
html += "Content-Type:text/html\r\n"
html += "\r\n"
with open("car.html", 'rb') as f:
    html = html.encode() + f.read()

connfd.send(html)
tcp.close()
connfd.close()
