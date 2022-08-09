echo {0..10}
echo {0..20..2}
echo {000...30..2}
echo file{a..z}{txt,log}
touch file{a..z}.txt

echo `echo hostname` 执行``中的内容并用echo显示出来
echo 'echo hostname'
echo "$(hostname)"显示执行结果
echo "$PATH"显示变量值

安装bash-completion后可以对子命令实例

history命令历史
! n 执行第n条命令，可以是-1，-2

date +%F\ %T 显示日期和时间，中间以空格分隔

command !^调用上一个命令的第一个参数
command !$调用上一个命令的最后一个参数
command !*调用上一个命令的所有参数
command !:n调用上一个命令的第n个参数
command !n:^调用第n条命令的第一个参数
command !string:^从命令历史中搜索以string开关的命令，并获取它的第一个参数
command !n:m调取第n条命令的第m个参数

<kbd>esc .</kbd> 和<kbd>alt .</kbd> 选择前面的参数
<kbd>ctrl+l</kbd>清屏
<kbd>ctrl+o</kbd>执行当前命令，并重新显示本命令
<kbd>ctrl+s</kbd>阻止屏幕输出，锁定（但可以执行输入的命令）
<kbd>ctrl+c</kbd>终止命令
<kbd>ctrl+z</kbd>挂起命令
<kbd>ctrl+a</kbd>光标移到行首
<kbd>ctrl+e</kbd>光标移到行尾
<kbd>ctrl+f</kbd>光标右移1个字符
<kbd>ctrl+b</kbd>光标左移1个字符
<kbd>alt+f</kbd>右移1个单词尾
<kbd>alt+b</kbd>左移1个单词首
<kbd>ctrl+xx</kbd>行首和光标处来回切换
<kbd>ctrl+u</kbd>删除到行首
<kbd>ctrl+k</kbd>删除到行尾
<kbd>alt+r</kbd>删除整行
<kbd>ctrl+w</kbd>删除到左面单词首
<kbd>alt+d</kbd>删除到右单词尾
<kbd>ctrl+d</kbd>删除当前字符
<kbd>ctrl+h</kbd>删除前一个字符

## 获取帮助
whatis命令的简短说明

command --help

man and info
man 1 man
man [章节号] 命令
章节号在whatis 命令中查看
/usr/share/doc/



free 查看内存使用情况 -h  (cat /proc/meminfo)
runlevel查看运行的情况（命令行，还是窗口）
init 3切换到命令行模式（5是X模式）

/etc/issue登录显示信息

hostname查看主机名称
hostname -I 查看主机地址

echo $SHELL查看shell

ps aux列出运行的程序

cat /etc/hostname
hostname 主机名（设置主机名）

sudo -i 改成root用户
echo $PS1 显示提示符格式，可以更改自定义提示方式（\e,\u,\H，etc）

lscpu查看CPU

hash  将命令放到内存中，可以查看执行过的命令

source 配置完的文件生效（.与它功能一样，是内部命令）

/etc/profile.d/env.sh

enable 查看内部生效的命令
enable 启用内部命令
enable -n 禁用内部命令

lsblk ：显示当前的硬盘(cat /proc/partitions)

uptime ：显示开机多长时间

id显示用户相关信息

bc计算器（obase=2,设置输出为2进制）

lscpu =cat /proc/cpuinfo(信息更全)

\ 可以把命令行分行输入

uname -r 看内核的版本

cal 查看日历(cal 2022)

shutdown +10 (10分钟后关机, shutdown -c 取消关机计划)

w 查看登录人员信息

echo -e "\a" 发出系统通知音

df -i 查看分区的节点编号大小，不加i查看磁盘大小

df -h 查看容量G，不是块的形式

lsof |grep delete 查看删除的没有释放的情况


man ascii查看asc代码

hexdump -C 文件名（以16进制显示文）

命令行扩展:``和$()
echo "i am `whoami`" 和echo "iam $(whoami)" 是一样的。

dirname 获取路径名
basename 获取文件名

echo \$OLDPWD 上一个目录
$PWD 当前目录

/etc/os-release 当前操作系统的信息

ls -dl /etc 查看/etc的属性，而不是看/etc里的内容的属性

ls --time=ctime
目录名：查看目录或文件的属性改变时间（mtime内容修改时间,atime访问时间）

stat 文件名[目录名] 查看详细内容包括atime,ctime,mtime

**显示编码列表**
icon -l
file 文件名(获取文件格式)
iconv -f 文件的格式 输入的文件名 -o 输出的文件名  (默认转为utf-8)

iconv -f 文件格式 -t 需要转换为的格式 文件名 -o 输出的文件名


**字符的匹配**
* 不匹配.开头的隐藏文件
~- 前一个工作目录
~+ 当前工作目录

[0-9]匹配数字1个
[a-z]匹配小写字符1个
[A-Z]匹配大写字符1个
[wang]匹配列表中的傻傻一个字符
[^wang]匹配列表中的所有字符以外的字符
[:digit:]任意数字相当于0-9
[:lower:]只匹配小写字符
[:upper:]
[:alpha:]任意大小写字符
ls \[[:lower:]](**需要套两层[]**)

ls -ad .*
ls -a .* 会进入目录会看到（.,..目录中的内容）-d 不会进入..

ls -A 不显示.和..目录

ls -d * 只显示目录

cp -p 拷贝时保留属性、所有者和权限
cp -d 不复制原始文件，只复制链接名。通常与-p联合使用
cp -a 归档，相当于备份
cp -v 显示进度

shred 彻底删除，内容覆盖多次

cat /dev/null> 文件名 :清空文件，释放使用的空间
> 文件名也可以实现上述功能，但是有的系统不支持(shell)

ln 文件名 新的位置文件名 （硬连接）
**链接就是一个文件有多个名字，不能跨分区进行链接**
不支持目录的链接，删除时减少计数，为0时删除文件
可以通过硬链接来减少磁盘I/O,在空闲时间来进行删除避免磁盘繁忙

**符号链接**（软链接）相当于是快捷链接
ln -s 文件名 链接的文件名 (删除原始文件时，软链接失效，变为红色)
在不同的目录中使用软链接时，需要在原始文件加上链接文件的相对目录(或者直接写直接路径)
软链接支持文件夹和分区的链接。

**管道学习**
/proc下面的数字目录是进程编号
/进程号/fd目录中的数字是指的就是 **<font color=red>文件描述符</font>**
echo $$ 显示当前进程编号(shell)
tty显示当前登录的终端
0 ->/dev/pst/1 指的是标准输出是终端1 
1 ->/dev/pst/1 指的是标准输入是终端1 
2 ->/dev/pst/1 指的是标准错误输出是终端1 

ls -d /dev/st* 显示出基本输出、输入、错误的文件描述符

1> 或>  标准输出重新定义到到文件名
hostname 1> /dev/pts/1 在指定的终端窗口显示输出内容 
2> 标准错误重定到文件
&> 所有输出都重定到文件

清除大文件:cat /dev/null > /data/file.log

ls /data /err > /data/all.log 2>&1 (&1 代表文件描述符1，也就是标准输出)

tr 转换字符
tr '123' 'abc' :把123分别转换为abc
tr 'a-z' 'A-Z'  小写转换为大写,等价 tr '[:lower:]' '[:upper:]'
tr -d 'abc' 删除abc
tr -s 'abc' 压缩连续的字符，连续的只留一个
tr -dc abc 除了abc其它的全删
tr -dc '[:alnum:]' </dev/urandom

tr '\012' '\015\012' <linux.txt>win.txt 格式转换

## 用户和组的权限管理
sudo getent shadow 用户名 ：查看用户shadow内容
cat /etc/group 查看用户的组情况
cat /etc/gshadow 查看组shadow

sudo openssl rand -base64 12 随机生成12位密码

pwck 检查passwd文件是否有错误
grpck 检查group文件是否有错误

sudo getent passwd wjf
sudo getent shadow wjf
sudo getent group wjf


useradd
- -u指定id
- -r创建系统帐号，系统帐号没有家目录
- -d在指定家目录
- -g指明用户所属基本组，可以是组名或组id，不指定创建一个用户同名的组
- -G指定附加组，可以有多个组，用","分开，组必须存在
- -s指定shell程序，可用列表在/etc/shells,/sbin/nologin,不登录使用（一般是服务等程序）
- -c用户注释 
useradd -r -u 48 -g apache -s /sbin/nologin -d /var/www -c "Apache" apche

/etc/default/useradd 默认参数的位置

/etc/skel/*   :默认的配置文件和.bashrc文件等文件
/etc/login.defs :控制帐号的一些内容（加密策略等）

newuser passwd 格式文件（批量创建用户）
批量修改用户口令(可以用文件：内容为username:passwd，cat 文件名|chpasswd，还实现)
echo username:passwd |chpasswd
usermod
- -u更改用户id
- -g更改用户的组
- -L 对用户加锁
- -U 解锁指定用户
userdel
- -f强制删除
- -r删除用户家目录和邮箱

passwd
- -d删除指定用户密码
- -l锁定用户
- -u解锁用户
- -e强制下次登录时更改密码


groupadd
- -g 增加组id
- -r 系统组
groupmod
groupdel

/var/spool/mail/用户名 用户邮件的位置

sudo groups wjf看wjf是在哪个组里

chown [option] [owner]:[gropu] file 更改文件或目录的所有者和组

chown wjf file.txt
chown :root file.txt
chown wjf:root file.txt

chgrp 组名 file 改变组

df -Th 显示分区的类型并以G的格式显示容量

umask 123 更改默认创建文件的权限
新建文件默认权限是：666-umask
新建目录默认权限是：777-umask
非特权用户umask是：002
特权用户umask是：022
umasm是显示目前的umask码
chmod 4777 /tmp/a.txt 加s权限
s以属主身份运行程序，S属主没有运动权限
chmod 777/tmp/a.txt可以去掉s权限

chattr +i 不能删除、改名更改,-i去掉特殊属性
chattr +a 只能追加内容

lsattr 显示特定内容


### 访问控制列表
早期的系统不支持acl需要进行手动增加
tune2fs -o acl /dev/sdb1
mount -o acl /dev/sdb1 /mnt/test

setfacl 可以设置acl权限
getfacl 可以查看设置的acl权限

setfacl -m u:root:- f1.txt
-m是修改,u是用户,root是要修改的用户，-是权限（无任何权限）

setfacl -Rb dir/去掉acl权限,可用于错误的acl权限操作

dmesg查看硬件事件

gerp -f 文件名1 文件名2 以第一个文件为基础，取出两个文件相同的内容