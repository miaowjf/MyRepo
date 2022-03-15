# pydantic

## 简介
pydantic是用于<font color=red>数据接口定义检查与设置管理</font>的库。
pydantic在运行时强制执行类型提示，并在数据无效时提供友好的错误。
## 二、常见模型
```python
from pydantic import BaseModel
class User(BaseModel):
    id:int
    name='Jane Doe'

#实例化将执行所有解析和验证，如果有错误则会触发ValidationError
user=User(id='123')
```
类要继承自<font color=yellow>BaseModel</font>,使用时<font color=yellow>冒号（:）</font>后面是数据类型，<font color=yellow>等号（=）</font>后面是预设值
```python
class Order(BaseModel):
    id:int
    name="lisi"
    name:Option[str]=None #使用Option是可填可不填的意思，None是默认值,有输入的话就是字符串
    items:List[str]#items的值是一个字符串列表
```
**<font color=red>ORM</font>的应用**:
将orm model导入到pydantic的model中，比如sqlalchemy
```python
class Item(BAseModel):
    name:str
    price:int
    class Config:
        orm_mode=True
        #针对没有列在model的key-value有forbid/ignore/allow三种方法处理。
        extra="forbid" #forbid报错、ignore忽略不讲、allow导入

#Validator检查变量是否符合规则
class Model(BaseModel):
    foo:str
    @validator('foo')
    def value_must_equal_bar(cls,v):
        if v!='bar':
            raise ValueError('value muse be "bar"')
        return v


#Field提供更详细的说明给docs中使用，在请示函数的参数会显示在docs的下面让调用者参考，增加Fastswagger内容
class Model(BaseModel):
    #name:str=Field(...,title="model title",description="model is good",default='abc')
    #不能有上句注释里的...那样的话必须在创建实例时指定name值才行。
    name:str=Field(title="model title",description="model is good",default='abc')

    #使用函数返回值做为默认值default_factory
    up_date:datetime=Field(title="更新时间",default_factory=datetime.now)
```

上面的例子中，id是一个整数并且<font color=red>是必须的</font>,nam是一个带有默认值的字符串并不是必需的。

**模型具有以下属性：**
- dict() 模型字段和值的字典
- json() JSON 字符串表示dict()
- copy() 模型的副本（默认为浅表副本）
- parse_obj() 使用dict解析数据
- parse_raw 将str或bytes并将其解析为json，然后将结果传递给parse_obj
- parse_file 文件路径，读取文件并将内容传递给parse_raw。如果content_type省略，则从文件的扩展名推断
- from_orm() 从ORM 对象创建模型
- schema() 返回模式的字典schema_json() 返回该字典的 JSON 字符串表示
- construct() 允许在没有验证的情况下创建模型
- __ fields_set __ 初始化模型实例时设置的字段名称集
- __ fields __ 模型字段的字典
- __ config __ 模型的配置类
## 三、常用类型
- None，type(None)或Literal[None]只允许None值
- bool 布尔类型
- int 整数类型
- float 浮点数类型
- str 字符串类型
- bytes 字节类型
- list 允许list,tuple,set,frozenset,deque, 或生成器并转换为列表
- tuple 允许list,tuple,set,frozenset,deque, 或生成器并转换为元组
- dict 字典类型
- set 允许list,tuple,set,frozenset,deque, 或生成器和转换为集合；
- frozenset 允许list,tuple,set,frozenset,deque, 或生成器和强制转换为冻结集deque 允许list,tuple,set,frozenset,deque, 或生成器和强制转换为双端队列
- datetime 的date,datetime,time,timedelta 等日期类型
- typing 中的 Deque, Dict, FrozenSet, List, Optional, Sequence, Set, Tuple, Union，Callable，Pattern等类型
- FilePath，文件路径
- DirectoryPath 目录路径
- EmailStr 电子邮件地址
- NameEmail 有效的电子邮件地址或格式
- PyObject 需要一个字符串并加载可在该虚线路径中导入的 python 对象；Color 颜色类型AnyUrl 任意网址SecretStr、SecretBytes 敏感信息，将被格式化为'**********'或''
- Json 类型 
- PaymentCardNumber 支付卡类型
- 约束类型，可以使用con*类型函数限制许多常见类型的值
   - conlist
    item_type: Type[T]: 列表项的类型
    min_items: int = None: 列表中的最小项目数
    max_items: int = None: 列表中的最大项目数 

   - conset
    item_type: Type[T]: 设置项目的类型
    min_items: int = None: 集合中的最小项目数
    max_items: int = None: 集合中的最大项目数 

   - conint
    strict: bool = False: 控制类型强制
    gt: int = None: 强制整数大于设定值
    ge: int = None: 强制整数大于或等于设定值
    lt: int = None: 强制整数小于设定值
    le: int = None: 强制整数小于或等于设定值
    multiple_of: int = None: 强制整数为设定值的倍数 

   - confloat
    strict: bool = False: 控制类型强制
    gt: float = None: 强制浮点数大于设定值
    ge: float = None: 强制 float 大于或等于设定值
    lt: float = None: 强制浮点数小于设定值
    le: float = None: 强制 float 小于或等于设定值
    multiple_of: float = None: 强制 float 为设定值的倍数 

   - condecimal
    gt: Decimal = None: 强制十进制大于设定值
    ge: Decimal = None: 强制十进制大于或等于设定值
    lt: Decimal = None: 强制十进制小于设定值
    le: Decimal = None: 强制十进制小于或等于设定值
    max_digits: int = None: 小数点内的最大位数。它不包括小数点前的零或尾随的十进制零
    decimal_places: int = None: 允许的最大小数位数。它不包括尾随十进制零
    multiple_of: Decimal = None: 强制十进制为设定值的倍数

    - constr
    strip_whitespace: bool = False: 删除前尾空格
    to_lower: bool = False: 将所有字符转为小写
    strict: bool = False: 控制类型强制
    min_length: int = None: 字符串的最小长度
    max_length: int = None: 字符串的最大长度
    curtail_length: int = None: 当字符串长度超过设定值时，将字符串长度缩小到设定值
    regex: str = None: 正则表达式来验证字符串 

    - conbytes
    strip_whitespace: bool = False: 删除前尾空格
    to_lower: bool = False: 将所有字符转为小写
    min_length: int = None: 字节串的最小长度
    max_length: int = None: 字节串的最大长度 

严格类型，您可以使用StrictStr，StrictBytes，StrictInt，StrictFloat，和StrictBool类型，以防止强制兼容类型
## 四、验证器
使用<font color=red>validtor装饰器</font>可以实现自定义和对象之间的复杂关系。
- 校验name字段包含空格
- 校验username 必须是字母和数字组成
- 校验密码1和密码2相等
```python
from pydantic import BaseModel, ValidationError, validator


class UserModel(BaseModel):
    name: str
    username: str
    password1: str
    password2: str

    @validator('name')
    def name_must_contain_space(cls, v):
        if ' ' not in v:
            raise ValueError('must contain a space')
        return v.title()

    @validator('password2')
    def passwords_match(cls, v, values, **kwargs):
        if 'password1' in values and v != values['password1']:
            raise ValueError('passwords do not match')
        return v

    @validator('username')
    def username_alphanumeric(cls, v):
        assert v.isalnum(), 'must be alphanumeric'
        return v


user = UserModel(
    name='samuel colvin',
    username='scolvin',
    password1='zxcvbn',
    password2='zxcvbn',
)
print(user)
#> name='Samuel Colvin' username='scolvin' password1='zxcvbn' password2='zxcvbn'

try:
    UserModel(
        name='samuel',
        username='scolvin',
        password1='zxcvbn',
        password2='zxcvbn2',
    )
    print(user)
    print(user.dict())
except ValidationError as e:
    print(e)
    """
    2 validation errors for UserModel
    name
      must contain a space (type=value_error)
    password2
      passwords do not match (type=value_error)
    """
```
<font color=red>关于验证器的一些注意事项：</font>
 - 验证器是“类方法”，因此它们接收的第一个参数值是<font color=red>UserModel类(cls)</font>，而不是<font color=yellow>UserModel实例(self)</font>
 - 第二个参数始终是要验证的字段值，可以随意命名
 - 您还可以将以下参数的任何子集添加到签名中（名称必须匹配）：
    - values：包含任何先前验证字段的名称到值映射的字典
    - config：模型配置
    - field：正在验证的字段。对象的类型是pydantic.fields.ModelField。
    - **kwargs：如果提供，这将包括上述未在签名中明确列出的参数
- 在验证器依赖其他值的情况下，您应该注意：
    - 验证是在定义的订单字段中完成的。例如，在上面的示例中，password2可以访问password1(and name)，但password1不能访问password2. 有关字段如何排序 的更多信息，请参阅字段排序
如果另一个字段的验证失败（或该字段丢失），它将不会包含在 中values，因此 if 'password1' in values and ...在此示例中。
运行示例(<font color=red>上面的代码</font>)
 - pre和each_item验证器
   - 单个验证器可以通过<font color=red>传递多个字段名称</font>来应用于多个字段
   - 也可以通过传递特殊值在<font color=red>所有字段</font>上调用单个验证器'*'
       @validator(<font color=red>'*'</font>,pre=True)这个红*就是对所有字段进行限制
   - 关键字参数pre将导致在其他验证之前调用验证器
   - 通过each_item=True将导致验证器被施加到单独的值（例如List，Dict，Set等），而不是整个对象
<font color=red>pre=True</font>关键字参数pre将导致验证器在其他验证之前被调用。(看下面代码)
```python
from pydantic import BaseModel, ValidationError, validator
from typing import List


class DemoModel(BaseModel):
    friends: List[int] = []
    books: List[int] = []

    # '*' 在这里是匹配任意字段，包含friends，books
    @validator('*', pre=True)
    def split_str(cls, v):
        """如果传参是字符串，根据逗号切割成list"""
        if isinstance(v, str):
            return v.split(',')
        return v

    @validator('books')
    def books_greater_then_5(cls, v):
        """判断books数量少于5"""
        if len(v) > 5:
            raise ValueError('books greater than 5')
        return v


a1 = {
    "friends": [2, 3, 4],
    "books": "3,4,5"
}
d = DemoModel(**a1)
print(d)  # friends=[2, 3, 4] books=[3, 4, 5]
print(d.dict())  # {'friends': [2, 3, 4], 'books': [3, 4, 5]}
```
虽然定义了books传list of int ,但是在校验的时候，加了个预处理，判断是字符串的时候，会转成list。

<font color=red>each_item=True</font> 将导致验证器应用于单个值（例如 of List、Dict、Set等），而不是整个对象
```python
from pydantic import BaseModel, ValidationError, validator
from typing import List


class DemoModel(BaseModel):
    friends: List[int] = []
    books: List[int] = []

    # '*' 在这里是匹配任意字段，包含friends，books
    @validator('*', pre=True)
    def split_str(cls, v):
        """如果传参是字符串，根据逗号切割成list"""
        if isinstance(v, str):
            return v.split(',')
        return v

    @validator('books')
    def books_greater_then_5(cls, v):
        """判断books数量少于5"""
        if len(v) > 5:
            raise ValueError('books greater than 5')
        return v

    @validator('friends', each_item=True)
    def check_friends(cls, v):
        """检查friends 里面单个值数字大于1"""
        assert v >= 1, f'{v} is not greater then 1'
        return v

    @validator('books', each_item=True)
    def check_books(cls, v):
        """books 里面单个值大于2"""
        assert v >= 2, f'{v} is not greater then 2'
        return v


a1 = {
    "friends": [2, 3, 4],
    "books": "3,4,5"
}
d = DemoModel(**a1)
print(d)  # friends=[2, 3, 4] books=[3, 4, 5]
print(d.dict())  # {'friends': [2, 3, 4], 'books': [3, 4, 5]}
```
validator传递多个字段名称，也可以传*
```python
# '*' 在这里是匹配任意字段，包含friends，books
    @validator('*', pre=True)
    def split_str(cls, v):
        """如果传参是字符串，根据逗号切割成list"""
        if isinstance(v, str):
            return v.split(',')
        return v
```
等价于
```python
@validator('friends', 'books', pre=True)
    def split_str(cls, v):
        """如果传参是字符串，根据逗号切割成list"""
        if isinstance(v, str):
            return v.split(',')
        return v
```

**子类验证器和each_item**

如果使用带有引用List父类上的类型字段的子类的验证器，使用each_item=True将导致验证器不运行；相反，必须以编程方式迭代列表。
```python
from typing import List
from pydantic import BaseModel, ValidationError, validator


class ParentModel(BaseModel):
    names: List[str]


class ChildModel(ParentModel):
    @validator('names', each_item=True)
    def check_names_not_empty(cls, v):
        assert v != '', 'Empty strings are not allowed.'
        return v


# This will NOT raise a ValidationError because the validator was not called
try:
    child = ChildModel(names=['Alice', 'Bob', 'Eve', ''])
except ValidationError as e:
    print(e)
else:
    print('No ValidationError caught.')
    #> No ValidationError caught.


class ChildModel2(ParentModel):
    @validator('names')
    def check_names_not_empty(cls, v):
        for name in v:
            assert name != '', 'Empty strings are not allowed.'
        return v


try:
    child = ChildModel2(names=['Alice', 'Bob', 'Eve', ''])
except ValidationError as e:
    print(e)
    """
    1 validation error for ChildModel2
    names
      Empty strings are not allowed. (type=assertion_error)
    """
```

**始终验证always=True**

出于性能原因，默认情况下，当未提供值时，不会为字段调用验证器。但是，在某些情况下，始终调用验证器可能很有用或需要，例如设置动态默认值。
```python
from datetime import datetime

from pydantic import BaseModel, validator


class DemoModel(BaseModel):
    ts: datetime = None

    @validator('ts', pre=True, always=True)
    def set_ts_now(cls, v):
        return v or datetime.now()


print(DemoModel())
#> ts=datetime.datetime(2021, 12, 31, 15, 4, 57, 629206)
print(DemoModel(ts='2017-11-08T14:00'))
#> ts=datetime.datetime(2017, 11, 8, 14, 0)
```

您经常希望将它与 一起使用pre，否则always=True pydantic会尝试验证None会导致错误的默认值。

pydantic使用例子
```python
from pydantic import BaseModel,ValidationError,constr
from typing import List,Optional
from datetime import datetime,date
from pathlib import Path
from sqlalchemy import Column,Integer,String
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.ext.declarative import declarative_base

class User(BaseModel):
    id:int
    name:str="John Snow"
    signup_ts:Optional[datetime]=None
    friends:List[int]=[]
    
external_data={
    "id":"123"
    "signup_ts":"2022-12-22 12:22"
    "friends":[1,2,"3"]
}
user=User(**external_data)
print(user.id,user.friends)
print(repr(signup_ts))
print(user.dict())
try:
    User(id=1,signup_ts=datetime.today(),friends=[1,2,"not number"])
except ValidationError as e:
    print(e.json())

print(user.dict())
print(user.json())
print(user.copy())#这里是浅拷贝
print(User.parse_obj(obj=external_data))
print(User.parse_raw('{"id":"123","signup_ts":"2022-12-22 12:32","friends":"[1,2,3]"}'))
print(User)
#文件解析
path=Path'pydantic_tutorial.json')
path.write_text('{"id":"123","signup_ts":"2022-12-22 12:32","friends":"[1,2,3]"')
print(User.parse_file(path))

print(user.schema())
print(user.schema_json())

print(User.construct(**external_data))#不校验数据进行转换,应提前进行再使用construct。

print(User.__fields__.keys())
#递归模型

class Sound(BaseModel):
    sound:str
class dog(BaseModel):
    birthday:date
    weight:float=optional[None]
    sound:List[Sound]

dogs=Dog(birthday=date.today(),weight=6.66,sound=[{"sound":"wang wang"},{"sound":"ying ying"}])
print(dogs.dict())

#类实例ORM，SQLALRCHEMY
Base=declarative_base()
class CompoanyOrm(Base):
    __tablename__='companies'
    id=Column(Integer,primary_key=True,nullable=False)
    public_key=Column(String(20),index=True,nullable=False,uniqure=True)
    name=Column(String(63),unique=True)
    domains=Colunm(ARRAY(String(255)))

class ComponyMode(BaseModel):
    id:int
    public_key:constr(max_length=20)
    domains:List[constr(max_length=255)]
    class Config:
        orm_mode=True


co_orm=CompanyOrm(
    id=123,
    public_key="foobar",
    name'testing',
    domains=["example.com','imooc.com']
)
print(CompoanMode.from_orm(co_orm))


```