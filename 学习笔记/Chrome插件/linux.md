echo {0..10}
echo {0..20..2}
echo {000...30..2}
echo file{a..z}{txt,log}

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

