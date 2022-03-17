# Redis基本使用基础
## 一、Redis启动

1. 直接启动
./redis-server

2. 指定配置文件

    - 备份redis.conf: cp redis.conf redis.conf.bak
    - bind 127.0.0.1是只有本机能访问，0.0.0.0是所有机器都能访问
    - daemonize yes:前台还是后台运行，yes是后台运行
    - requirepass 123456:设置访问密码
    - port 端口号
    - dir . 设置工作目录，.是当前目录
    - database 1 数据库数量，设置为1，代表只能使用1个库，默认为16，编号0-15
    - maxmemory 152mb 设置最大内存
    - logfile 'redis.log'，日志默认为空
    - dbfilename dump.rdb
  然后使用<font color=red>redis-server </font>配置文件名称来启动
3. 开机自动启动
需要制作一个services程序 

## 二、Redis命令行客户端

./redis-cli [options] [commands]

1. options
  - -h 127.0.0.1 连接到指定的redis节点的IP地址
  - -p 6379 连接到指定的端口号,默认为6379
  - -a 123456 指定redis的访问密码
2. command
  - ping 与服务端心跳测试，服务器正常会返回pong
  ./redis-cli ping

连入后，如果需要密码可以通过<font color=red>auth 用户名 密码</font>来登录使用，没有用户名，直接写密码就可以。