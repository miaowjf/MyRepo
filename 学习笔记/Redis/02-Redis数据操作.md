# Redis数据操作

## 一、Redis数据结构
Redis是一个key-value的数据库，key一般是String，value值有多种选择：
|数据类型|例子(value)|
|:---:|:---:|
|String|Hello World|
|Hash|{namd:"jake",age:13}|
|List|[A->B->C->C]|
|Set|{A,B,C}|
|SortedSet|{A:1,B:2,C:3}|
|Geo|{A:(120.3,#0.5)}|
|BitMap|01011010110110|
|HyperLog|01101010|
|消息、队列等|后续介绍|

在命令行里通过help进行帮助

help @set ,help @hash，help @list 获取不同组的帮助。

<font color=red>**key多层结构**</font>:
Redis的key允许有多个单词形成<font color=yellow>层级结构</font>，多个单词之间用“：”隔开，格式如下：
<font color=green>项目名称:业务名:类型:id</font>，数据库会形成相应的层级进行管理。
## 三、通用命令

help @generic 查看通用命令。
1. Keys 查看符合模板的所有key
```shell
jkeys *
keys 44*
keys 44??
```
2. Del 删除指定的key
```shell
del key
del 44 45 46
返回删除key的数量
```
3. exists 判断key是否存在
```shell
exists age name
返回key存在的个数。都存在返回2，都不存在返回0，有一个存在返回1
```
4. expire:设定一个key的有效期,有效期后消除该key
```shell
expire age 60
设置age有效期为60秒
```
5. ttl：查看一个key的有效期,-1为永久，-2为已经删除
6. type:查看一个key的类型
 
## 四、string类型
可以分为三类，<font color=yellow>string,int,float</font>,数值的可以做自增、自减
1. set key value
2. get key key2
3. mset key1 value1 key2 value2 ：设置多个key-value
4. mget key1 key2 ：获得多个key的值
5. incr key ：整型自增1,返回自增后的值
6. incrby key 增长的值：
7. incrbyfloat key 增长幅度：<font color=red>增长幅度必须指定</font>
8. setnx key value：设定一个string键值对，<font color=yellow>如果key存在，就不执行</font>,成功返回1
9. setex key ttl value:添加一个String键值对，并设定有效期。或使用set key value ex 秒数来定义。

## 五、Hash类型
Hash类型，也叫散列，其value是一个无序字典。
1. hset key fild value :<font color=yellow>添加或修改</font>hash类型key的多个field的值
2. hget 获取一个hash类型key的指定的field的值。<font color=yellow>只能取一个field的值</font>
3. hmset 与hset功能一样，但只返回OK，hset 返回设置了几个field 
4. hmget 获得一个key的多个字段的值。
5. hgetall key :获取所有key的field和value
6. hkeys key :获取该key的field
7. hvals key ：获取该key的所有字段的value
8. hincrby key field increment:让一个字段值自增
9. Hsetnx key field value:添加一个key的field值，如果该field存在则不执行。

## 六、List类型

Redis中的List可以看成是一个双向列表，即可以正向检索，也可以反向检索。
特征：
- 有序
- 元素可以重复
- 插入和删除快
- 查询速度一般

在保存有顺序的列表时使用，比如：点赞（有点赞的顺序）、评论等
1. lpush key element...:向列表左侧插入一个或多个元素
2. lpop key：移除最左侧的第一个元素，没有则返回nil
3. rpush key element...
4. rpop key
5. lrange key start end:返回一段范围内的所有元素
6. blpop、brpop 没有元素时等待指定时间，而不是直接返回nil

## 七、Set类型

特征：
  - 无序
  - 元素不要重复
  - 查找快
  - 支持交集、并集、差集等功能

1. Sadd key memmber ...:增加一个或多个元素
2. Srem key member ...:移除一个或多个元素
3. scard key :返回set中元素的个数
4. sismember key member:判断一个元素是否在set中
5. smembers :所有集合中所有的成员
6. sinter key1 key2 ...:求两个或多个集合的交集
7. sdiff key1 key2 ...:求2个或多个集合的差集
8. sunion key1 key2 ...:求并集，没有重复的内容
好友等关系可以用在这里。

## 八、SortedSet类型
help @sorted_set
特征：默认为升序排列，如果要降序要要命令的Z后面加上rev即可
  - 可排序
  - 元素不重复
  - 查询速度快
一般使用在排行榜中
1. zadd key score member:增加一个带scroe的member(score是分数),如果member已存在则修改该member的分数。
2. zrem key member: 删除指定的member
3. zscore key member: 查一个member的分数
4. zrank key member: 获取member的排名
5. zcard key: 获取元素个数
6. zcount key min max:统计score值在mix和max之间的元素个数
7. zincrby key increment member:让member的score值增加。
8. zrange key min max:按score排序，取min和max<font color=yellow>排名</font>范围内的元素
9. zrangebyscory key mix max:按score排序后，<font color=yellow>获取指定score范围内的元素</font>
10. zdiff、zinter、zunion：求差集、交集、并集
zrevrange、zrevrank