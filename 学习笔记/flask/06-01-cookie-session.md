# cookie、session

```python
#设置cookie
response.set_cookie('uid',str(user.id),max_age=1800,expires=)#max_age单位为秒（默认为尽可能长的时间），expires是一个日期后过期
return response

#获取cookie
uid=request.cookies.get('uid')
if uid:
    user=User.query.get(uid)
    return render_template('user/index.html',user=user)


#logout
def logout():
    response=redirect(url_for('user.index'))
    response.delete_cookie('uid')
    return response



```

```python
#配置中要加下面的内容
SECRET_KEY='kdjka;djkfa;lkdfja;lskjfa;lsj'
#程序中内容
session['uid']=user.id
#获取内容
uid=session.get('uid')
#删除内容
del session['uid']

```

