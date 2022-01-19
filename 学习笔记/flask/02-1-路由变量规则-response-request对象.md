# 路由、变量规则 和response、request对象

1. ### 路由

   192.168.1.10：8080

   ```python
   @app.route('/index')
   def index():
       return 'Hello World'
   
   @app.route('/user/<username>')
   def show_user_profile(username):
       return 'User is %s' % escape(username)
   
   #绑定路由到函数
   def index():
       return 'welcome everyone'
   app.add_url_rule('/index',view_func=index)
   
   #变量规则
   data={'a':'post1','b':'post2','c':'post3'}
   @app.route('/post/<int:post_id>')#int,float,string,path(类似string，可以包含斜杠),uuid
   def getPost(post_id):
       return data.getpost(key)
   ```

   

   2. **response**

      ```python
      
      response=Response('<h1>大家好，大家中午吃了吗？<h1>')
      response.headers['list']="abcd"
      response.header['abc']='list'
      print(response.content_type)
      print(response.headers)
      print(response.status_code)
      print(response.status)#status未定义
      
      response.set_cookie('name','LiBi')
      return response
      ```

   3. **request**

      ```python
      from flask import request
      
      @app.route('/index2')
      def index2():
          print(request.headers)#request引入的就是一个对象，不是类，可以直接使用
          print(request.path)
          print(request.base_url)
          print(request.url)
          print(request.full_path)#表单使用
          return ...
      ```

      ```html
      <form action="" method="get">
          
          <p>
              <input type="text" placeholder="姓名"/>
              <input type="text" placeholder="地址"/>
              <input type="submit" placeholder="提交"/>
          </p>
      </form>
      ```

      

   

   