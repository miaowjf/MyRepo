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



**git add 文件名:**将修改的文件放到暂存区，使用git commit后修改的文件会保存到本地库

**git reset HEAD [文件名]:**将提交到本地库的文件恢复到修改状态，没有[文件名]时是上次提交的文件全从本地库中恢复出来。

git checkout 文件名：放弃修改

git log 查看提交的版本

##### 新版旧版不同开始

git restore --staged<file>:变为unstage状态（后面就没有一直是reset**??**)，老版本是checkout --文件名,**后来的是restore**(原来是checkout)

git restore  文件名

暂存区后撤消，用git restore 文件名（新，原来也是git rest HEAD)

##### 新版旧版不同结束

git diff查看文件的不同

git reset --hard HEAD^：退回到上一个版本。^两个就是回退2个版本

git reset --hard 版本号：前进（回退）到指定版本（前几位就可以一般6位就可以）

git reflog 查看切换过程，可以丁查看从哪个版本切换到哪个版本

# 文件删除

rm 文件名

git status

git add/rm 文件名

git status 

可以恢复文件，git restore 老版本 git reseet 改变提交

# 远程提交

git remote add origin **url**

git push -u origin master

以后可以直接 git push

git clone **url** 拷贝

git remote add origin **url**

git pull 更新文件

# 分支

git checkout -b dev ：创建dev分支，并切换到dev分支

 git branch 分支名 （创建分支，与上一条一样，**但不切换到创建的分支**）

新版用git checkout 分支名

在主分支里，git merge dev 将dev分支合并到master

git brancd -D 分支名

##### 有矛盾如何合并

在主分支和其它分支上修改同一个文件，并提交后，切换到master 执行

git merge dev 

打开冲突的文件，进行修改后，git status会显示文件已修改，用git add .来确认修改commit后就解决了冲突

#### bug处理

保存当前状态，切换到分支去操作。

git stash 保存当前状态

git checkout -b bug 

进行修改

git add .

git commit -m 'modify bug'

git checkout master 返回master

git merge bug 合并分支

git stash list 查看状态列表

git stash apply

git stash apply stash@{0...n} 多个状态的情况下进行恢复。







