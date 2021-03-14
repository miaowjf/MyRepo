学习练习在g:\gitStudy目录下

git config -l 查看git配置清单

git config --system --list 查看系统配置的清单

git config --global --list 查看本地的配置

git config --global user.name="miaowjf" 设置用户名

git config --global user.email wwjf@sina.com 设置邮箱

所有的配置文件，其实都保存在本地

1. git\etc\gitconfig:git安装目录下的gitconfig --system系统级
2. 用户的配置：用户目录下\.gitconfig --global全局的配置

#### 初始化一个仓库

1. git init 文件夹里增加一个.git文件夹
2. git clone url  --下载下个文件夹，就是文件

文件状态说明：

1. Untracked：未跟踪的，需要使用git add 变为Staged
2. Unmodified:未修改的，git rm 移出版本库成为Untracked
3. Modified:文件已修改，可以使用git add进入暂存，或git checkout丢弃修改
4. Staged:暂存状态，执行git commit 将修改同步到库中，git reset Head filename 取消暂存，文件为Modified

#### 练习

git status [文件名7]

git status 查看所有文件状态

新建一个文件，

git status

git add . 

git commit -m ”写的信息"

git status

#### 文件忽略

修改.gitignore文件

*.txt 忽略所有.txt文件

!lib.txt lib.txt文件除外

/temp 忽略项目根目录下的temp目录下的文件，其它的temp目录不忽略

build/ 忽略build目录下的文件



