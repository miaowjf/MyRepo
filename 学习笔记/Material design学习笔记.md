![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/comprehensive-material-design-note-1.jpg)

编者按：这一年就快完了，你还没搞懂Material design吗？是嫌文档太长，还是觉得自己英文不好？都没关系，我们善良热情的[@十萬個為什麽](https://link.uisdc.com/?redirect=http%3A%2F%2Fweibo.com%2Fgreenzorro)  帮同学们通读了一遍官方的设计指南，去糙取精，整理出这篇干货超多的学习笔记，打包票学完基本就掌握90%了，别错过咯！

自从Material design发布以来，可乐橙就在一直收集相关素材与资源，研究别人的作品。这套设计风格非常鲜明，带有浓郁的Google式严谨和理性哲学，深得我心。实际上，光是研究素材和别人作品，就能发现一些明显的规律，做出几分相似的设计。这样半吊子的状态一直保持到现在，最近有时间通读一遍官方的设计指南，终于有了深入的理解。在朋友的项目（[http://lydiabox.com](https://link.uisdc.com/?redirect=http%3A%2F%2Flydiabox.com%2F)）中实践了一番，虽然很抱歉拿朋友开刀，不过他对整体效果似乎还算满意。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-1.png)

Material design的[设计规范](https://www.uisdc.com/tag/%e8%ae%be%e8%ae%a1%e8%a7%84%e8%8c%83)细致入微，需要消化好一阵子。越读越感受到它的妙处，假如每个细节都严格遵照Material design的思想来设计，哪怕你不是设计人员，你的产品也一定不会难用和难看。当然，作为设计师，要求就更高了。设计文档本身，就提供了一种很好的方式，帮你从各个角度思考和构建自己产品的规范。但在这之前，先要好好整理一下学习笔记。要打破规矩，必先掌握规矩。

由于只是笔记，我会写得尽量简单。并且省略掉一些可乐橙认为设计师都已经掌握的信息。想要深入了解Material design，还是建议有空通读一遍官方文档。不过，牢记以下要点，基本能做到90%了。实际上，Google官方的应用也有不遵照规范的地方，不能太拘泥于条条框框。

#### **一、核心思想**

,aterial design的核心思想，就是把物理世界的体验带进屏幕。去掉现实中的杂质和随机性，保留其最原始纯净的形态、空间关系、变化与过渡，配合虚拟世界的灵活特性，还原最贴近真实的体验，达到简洁与直观的效果。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-2.png)

Material design是最重视跨平台体验的一套设计语言。由于规范严格细致，保证它在各个平台使用体验高度一致。不过目前还只有Google自家的服务这么做，毕竟其他平台有自己的规范与风格。

#### **二、材质与空间**

**材质**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-1.gif)

Material design中，最重要的信息载体就是魔法纸片。纸片层叠、合并、分离，拥有现实中的厚度、惯性和反馈，同时拥有液体的一些特性，能够自由伸展变形。

这些是纸片的魔法特性，真实纸片所不具备的能力：

-   纸片可以伸缩、改变形状
-   纸片变形时可以裁剪内容，比如纸片缩小时，内容大小不变，而是隐藏超出部分
-   多张纸片可以拼接成一张
-   一张纸片可以分裂成多张
-   纸片可以在任何位置凭空出现

不过，魔法纸片有些效果是禁止的：

-   一项操作不能同时触发两张纸片的反馈
-   层叠的纸片，海报高度不能相同
-   纸片不能互相穿透
-   纸片不能弯折
-   纸片不能产生透视，必须平行于屏幕

**空间**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-3.png)

Material design引入了z轴的概念，z轴垂直于屏幕，用来表现元素的层叠关系。z值（海拔高度）越高，元素离界面底层（水平面）越远，投影越重。这里有一个前提，所有的元素的厚度都是1dp。

所有元素都有默认的海拔高度，对它进行操作会抬升它的海拔高度，操作结束后，它应该落回默认海拔高度。同一种元素，同样的操作，抬升的高度是一致的。

注意：这不止是设计中的概念，开发人员确实可以通过一个值来控制元素的海拔高度和投影。

#### **三、动画**

Material design重视动画效果，它反复强调一点：动画不只是装饰，它有含义，能表达元素、界面之间的关系，具备功能上的作用。

**easing**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-2.gif)

动画要贴近真实世界，就要重视easing。物理世界中的运动和变化都是有加速和减速过程的，忽然开始、忽然停止的匀速动画显得机械而不真实。考虑动画的easing，要先考虑它在现实世界中的运动规律。

**水波反馈**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-3.gif)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-4.gif)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-5.gif)

所有可点击的元素，都应该有这样的反馈效果。通过这个动画，将点击的位置与所操作的元素关联起来，体现了Material design动画的功能性。

**转场效果**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-6.gif)

通过过渡动画，表达界面之间的空间与层级关系，并且跨界面传递信息。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-7.gif)

从父界面进入子界面，需要抬升子元素的海拔高度，并展开至整个屏幕，反之亦然。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-8.gif)

多个相似元素，动画的设计要有先后次序，起到引导视线的作用。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-9.gif)

相似元素的运动，要符合统一的规律。

**细节动画**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-10.gif)

通过图标的变化和一些细节来达到令人愉悦的效果。

#### **四、颜色**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-4.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-5.png)

颜色不宜过多。选取一种主色、一种辅助色（非必需），在此基础上进行明度、饱和度变化，构成配色方案。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-6.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-7.png)

Appbar背景使用主色，状态栏背景使用深一级的主色或20%透明度的纯黑。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-8.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-9.png)

小面积需要高亮显示的地方使用辅助色。

其余颜色通过纯黑#000000与纯白#ffffff的透明度变化来展现（包括图标和分隔线），而且透明度限定了几个值。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-10.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-11.png)

黑色：\[87% 普通文字\] \[54% 减淡文字\] \[26% 禁用状态/提示文字\] \[12% 分隔线\]  
白色：\[100% 普通文字\] \[70% 减淡文字\] \[30% 禁用状态/提示文字\] \[12% 分隔线\]

延伸阅读：[《超方便！Material Design专用在线配色工具》](http://www.uisdc.com/3-websites-design-online)

#### **五、图标**

**桌面图标**

桌面图标尺寸是48dp X 48dp。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/QQ20141228165008.png)

桌面图标建议模仿现实中的折纸效果，通过扁平色彩表现空间和光影。注意避免以下问题：

-   不要给彩色元素加投影
-   层叠不要超过两层
-   折角不要放在左上角
-   带投影的元素要完整展现，不能被图标边缘裁剪
-   如果有折痕，放在图片中央，并且最多只有一条
-   带折叠效果的图标，表面不要有图案
-   不能透视、弯曲

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/QQ20141228165131.png)

常规形状可以遵循几套固定栅格设计。

**小图标**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-18.png)

优先使用material design默认图标。设计小图标时，使用最简练的图形来表达，图形不要带空间感。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/icon-framework.png)

小图标尺寸是24dp X 24dp。图形限制在中央20dp X 20dp区域内。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-21.png)

小图标同样有栅格系统。线条、空隙尽量保持2dp宽，圆角半径2dp。特殊情况相应调整。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-22.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-23.png)

小图标的颜色使用纯黑与纯白，通过透明度调整：

黑色：\[54% 正常状态\] \[26% 禁用状态\]  
白色：\[100% 正常状态\] \[30% 禁用状态\]

#### **六、图片**

**选用图片**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-24.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-25.png)

描述具体事物，优先使用照片。然后可以考虑使用插画。

**图片上的文字**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-26.png)

图片上的文字，需要淡淡的遮罩确保其可读性。深色的遮罩透明度在20%-40%之间，浅色的遮罩透明度在40%-60%之间。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-27.png)

对于带有文字的大幅图片，遮罩文字区域，不要遮住整张图片。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-28.png)

可以使用半透明的主色盖住图片。

**提取颜色**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-29.png)

Android L可以从图片中提取主色，运用在其他UI元素上。

**图片加载过程**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-30.png)

图片的加载过程非常讲究，透明度、曝光度、饱和度3个指标依次变化，效果相当细腻。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-11.gif)

#### **七、文字**

**字体**

英文字体使用Roboto，中文字体使用Noto。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-31.png)

Roboto有6种字重：Thin、Light、Regular、Medium、Bold 和 Black。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-32.png)

Noto有7种字重：Thin, Light、DemiLight、Regular、Medium、Bold 和 Black。

**文字排版**

常用字号：

-   12sp 小字提示
-   14sp（桌面端13sp） 正文/按钮文字
-   16sp（桌面端15sp） 小标题
-   20sp Appbar文字
-   24sp 大标题
-   34sp/45sp/56sp/112sp 超大号文字

长篇幅正文，每行建议60字符（英文）左右。短文本，建议每行30字符（英文）左右。

#### **八、布局**

所有可操作元素最小点击区域尺寸：48dp X 48dp。

栅格系统的最小单位是8dp，一切距离、尺寸都应该是8dp的整数倍。以下是一些常见的尺寸与距离：

-   顶部状态栏高度：24dp
-   Appbar最小高度：56dp
-   底部导航栏高度：48dp
-   悬浮按钮尺寸：56x56dp/40x40dp
-   用户头像尺寸：64x64dp/40x40dp
-   小图标点击区域：48x48dp
-   侧边抽屉到屏幕右边的距离：56dp
-   卡片间距：8dp
-   分隔线上下留白：8dp
-   大多元素的留白距离：16dp
-   屏幕左右对齐基线：16dp
-   文字左侧对齐基线：72dp

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-33.png)

另外注意56dp这个数字，许多尺寸可变的控件，比如对话框、菜单等，宽度都可以按56的整数倍来设计。

还有非常多规范，不详细列举，遵循8dp栅格很容易找到适合的尺寸与距离。平板与PC上留白更多，距离与尺寸要相应增大。

#### **九、组件**

**Bottom sheets**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-34.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-35.png)

通常以列表形式出现，支持上下滚动。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-36.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-37.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-38.png)

也可以是网格式的。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-39.png)

**Buttons**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-40.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-41.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-42.png)

按钮分为悬浮按钮、凸起按钮和扁平按钮3种。重要性如下递减：

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-43.png)

最重要且随处用到的操作，建议使用悬浮按钮。信息较多时，选用凸起按钮可以有效突出重要操作，但注意纸片不要叠太多层。扁平按钮适合用在简单的界面，例如对话框中。

使用悬浮按钮要遵循以下规则：

-   建议只用一个悬浮按钮
-   悬浮按钮可以贴在纸片边缘或者接缝处，但不要贴在对话框、侧边抽屉和菜单的边缘
-   悬浮按钮不能被其他元素盖住，也不能挡住其他按钮
-   列表滚动至底部时，悬浮按钮应该隐藏，防止它挡住列表项
-   悬浮按钮的位置不能随意摆放，可以贴着左右两边的对齐基线

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-44.png)

悬浮按钮通常触发正向的操作，添加、创建、收藏之类。不能触发负面、破坏性或不重要的操作，也不应该有数字角标。下图就是悬浮按钮的错误使用：

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-45.png)

悬浮按钮有两种尺寸：56x56dp/40x40dp

**Cards**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-46.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-47.png)

即使在同一个列表中，卡片的内容和布局方式也可以不一样。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-48.png)

卡片统一带有2dp的圆角。

在以下情况考虑使用卡片：

-   同时展现多种不同内容
-   卡片内容之间不需要进行比较
-   包含了长度不确定的内容，比如评论
-   包含丰富的内容与操作项，比如赞、滚动条、评论
-   本该是列表，但文字超过3行
-   本该是网格，但需要展现更多文字

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-49.png)

卡片最多有两块操作区域。辅助操作区至多包含两个操作项，更多操作需要使用下拉菜单。其余部分都是主操作区。

**Chips**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-50.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-51.png)

狭小空间内表现复杂信息的一个组件，比如日期、联系人选择器。

**Dialogs**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-52.png)

对话框包含标题、内容和操作项。点击对话框外的区域，不会关闭对话框。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-53.png)

通常情况，避免出现滚动条。空间不足时允许滚动，滚动条建议默认显示。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-54.png)

对话框中，取消类操作项放在左边，引起变化的操作项放在右边。要写明操作项的具体效果，不要只写“是”和“否”。标题文字要明确，即使不读正文内容也能知道在干什么，标题不要用“确定吗”这样的含糊措辞。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-55.png)

在对话框中改变内容，不会提交数据，点击确定后，才会发生变化。

对话框上方不能再层叠对话框。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-56.png)

还有一种简易对话框，不带操作项。点击列表内容触发相应操作，并关闭对话框。点击简易对话框外面，对话框会关闭，操作取消。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-57.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-58.png)

对话框可以是全屏式的，全屏对话框上方可以再层叠对话框。左图是一个普通界面，其中的任何改动立即生效。右图是全屏对话框，其中任何改动，要点击保存后才生效，点击X取消。

全屏对话框右上角的操作项，可以是诸如保存、发送、添加、分享、更新、创建之类的操作，不要使用完成、OK、关闭这样的含糊措辞。

只有必填项都填了，右上角的操作项才变为可点击状态。

内容发生了改变，点左上角的X，需要有个确认对话框，提示是否忽略修改。内容没有发生改变，点左上角的X，直接退出全屏对话框。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-59.png)

对话框的四周留白比较大，通常是24dp。

**Dividers**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-60.png)

列表中有头像、图片等元素时，使用内嵌分隔线，左端与文字对齐。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-61.png)

没有头像、图标等元素时，需要用通栏分隔线。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-62.png)

图片本身就起到划定区域的作用，相册列表不需要分隔线。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-63.png)

谨慎使用分隔线，留白和小标题也能起到分隔作用。能用留白的地方，优先使用留白。分隔线的层级高于留白。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-64.png)

通栏分隔线的层级高于内嵌分隔线。

**Grids**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-65.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-66.png)

网格由单元格构成，单元格中的瓦片用来承载内容。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-67.png)

瓦片可以横跨多个单元格。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-68.png)

瓦片包含主操作区和副操作区，副操作区的位置可以在上下左右4个角落。在同一个网格中，主、副操作区的内容与位置要保持一致。两者的操作都应该直接生效，不能触发菜单。

网格只能垂直滚动。单个瓦片不支持滑动手势，也不鼓励使用拖放操作。

网格中的单元格间距是2dp或8dp。

**Lists**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-69.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-70.png)

列表由行构成，行内包含瓦片。如果列表项内容文字超过3行，请改用卡片。如果列表项的主要区别在于图片，请改用网格。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-71.png)

列表包含主操作区与副操作区。副操作区位于列表右侧，其余都是主操作区。在同一个列表中，主、副操作区的内容与位置要保持一致。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-72.png)

在同一个列表中，滑动手势操作保持一致。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-73.png)

主操作区与副操作区的图标或图形元素是列表控制项，列表的控制项可以是勾选框、开关、拖动排序、展开/收起等操作，也可以包含快捷键提示、二级菜单等提示信息。

**Menus**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-74.png)

顺序固定的菜单，操作频繁的选项放在上面。顺序可变的菜单，可以把之前用过的选项排在前面，动态排序。菜单尽量不要超过2级。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-75.png)

当前不可用的选项要显示出来，让用户知道在特定条件可以触发这些操作。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-76.png)

菜单原地展开，盖住当前选项，当前选项应该成为菜单的第一项。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-77.png)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-78.png)

菜单的当前选项，始终与当前选项水平对齐。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-79.png)

靠近屏幕边缘时，位置可适当错开。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-80.png)

菜单过长时，需要显示滚动条。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-81.png)

菜单从当前选项固定位置展开，不要跟随点击位置改变。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-82.png)

菜单到上下留出8dp距离。

**Pickers**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-83.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-84.png)

日期和时间选择器是固定组件，在小屏幕设备中，通常以对话框形式展现。

**Progress & activity**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-12.gif)

线形进度条只出现在纸片的边缘。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-13.gif)

环形进度条也分时间已知和时间未知两种。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-14.gif)

环形进度条可以用在悬浮按钮上。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-15.gif)

加载详细信息时，也可以使用进度条。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/b-16.gif)

下拉刷新的动画比较特殊，列表不动，出现一张带有环形进度条的纸片。

**Sliders**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-85.png)

滑块左右两边可以放置图标。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-86.png)

或是可编辑文本框。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-87.png)

非连续的滑块，需要标出具体数值。

**Snackbars & toasts**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-88.png)

Snackbars至多包含一个操作项，不能包含图标。不能出现一个以上的Snackbars。

Snackbars在移动设备上，出现在底部。在PC上，应该悬浮在屏幕左下角。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-89.png)

不一定要用户响应的提示，可以使用Snackbars。非常重要的提示，必须用户来决定的，应该用对话框。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-90.png)

Snackbars不能遮挡住悬浮按钮，悬浮按钮要上移让出位置。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-91.png)

Snackbars的留白比较大，24dp。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-92.png)

toasts和Snackbars类似，样式和位置可以自定义，建议遵循Snackbars的规则设计。

**Subheaders**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-93.png)

小标题是列表或网格中的特殊瓦片，描述列表内容的分类、排序等信息。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-94.png)

滚动时，如果列表较长，小标题会固定在顶部，直到下一个小标题将它顶上去。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-95.png)

存在浮动按钮时，小标题要让出位置，与文字对齐。

**Switches**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-96.png)

必须所有选项保持可见时，才用Radio button。不然可以使用下拉菜单，节省空间。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-97.png)

在同一个列表中有多项开关，建议使用Checkbox。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-98.png)

单个开关项建议使用Switch。

### Tabs

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-99.png)

tab只用来展现不同类型的内容，不能当导航菜单使用。tab至少2项，至多6项。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-100.png)

超出6项，tab需要变为滚动式，左右翻页。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-101.png)

tab文字要显示完整，字号保持一致，不能折行，文字与图标不能混用。

tab选中项的下划线高度是2dp。

**Text fields**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-102.png)

简单一根横线就能代表输入框，可以带图标。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-103.png)

激活状态和错误状态，横线的宽度变为2dp，颜色改变。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-104.png)

输入框点击区域高度至少48dp，但横线并不在点击区域的底部，还有8dp距离。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-105.png)

输入框提示文字，可以在输入内容后，缩小停留在输入框左上角。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-106.png)

整个点击区域增高，提示文字也是点击区域的一部分。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-107.png)

通栏输入框是没有横线的，这种情况下通常有分隔线将输入框隔开。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-108.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-109.png)

右下角可以加入字数统计。字数统计不要默认显示，字数接近上限时再显示出来。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-110.png)

通栏输入框也可以有字数统计，单行的字数统计显示在同一行右侧。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-111.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-112.png)

错误提示显示在输入框的左下方。默认提示文本可以转换为错误提示。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-113.png)

字数限制与错误提示都会使点击区域增高。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-114.png)

同时有多个输入框错误时，顶部要有一个全局的错误提示。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-115.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-116.png)

输入框尽量带有自动补全功能。

**Tooltips**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-117.png)

提示只用在小图标上，文字不需要提示。鼠标悬停、获得焦点、手指长按都可以触发提示。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-118.png)

上图是错误例子。提示不能包含富文本，不需要三角箭头。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-119.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-120.png)

触摸提示（左）和鼠标提示（右）的尺寸是不同的，背景都带有90%的透明度。

**Navigation drawer**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-121.png)

侧边抽屉从左侧滑出，占据整个屏幕高度，遵循普通列表的布局规则。手机端的侧边抽屉距离屏幕右侧56dp。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-122.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-123.png)

侧边抽屉支持滚动。如果内容过长，设置和帮助反馈可以固定在底部。抽屉收起时，会保留之前的滚动位置。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-124.png)

列表较短不需要滚动时，设置和帮助反馈跟随在列表后面。

#### **十、设置界面**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-125.png)![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-126.png)

设置和帮助反馈通常放在侧边抽屉中。如果没有侧边抽屉，则放在Appbar的下拉菜单底部。

设置界面只能包含设置项，诸如关于、反馈之类的界面，入口应该放在其他地方。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-127.png)

设置项使用通栏分隔线来分组。7项以下不必分组。如果某项独立一组，考虑把它放在顶部（重要）或放在底部的“其他”一栏中（不重要）。设置项较多时尝试合并，比如把两个相关的勾选项合并成一个多选项。设置项非常多时，使用子界面。

#### **十一、易用性**

**无障碍设计**

material design很重视用户的广度，应该尽量照顾到残障人士的体验。设计时考虑以下使用场景：

-   没有声音
-   没有色彩
-   手机开启了高对比度模式
-   手机画面放大
-   没有视觉信息，使用屏幕阅读器
-   只能通过语音控制
-   以上多项结合

并注意以下问题：

-   无鼠标、纯键盘操作。鼠标悬停显示信息，也要通过其他方式展现。
-   考虑大字号情况下的使用体验。
-   不要只通过颜色表达某些信息。
-   音频信息也要提供文字或其他视觉呈现。
-   为图片和视频提供备用的文字信息。

**本地化**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/a-128.png)

为阿拉伯语、希伯来语、波斯语用户设计相反的界面，他们的书写和阅读习惯是从右到左的。

#### **十二、资源（需要科学上网）**

精华资源两波：

1.  [《新鲜热辣！一组实用的Material Design风格素材！》](http://www.uisdc.com/material-design-freebie)
2.  [《该跟上潮流了！一大波优质的MATERIAL DESIGN资源免费下载》](http://www.uisdc.com/high-quality-material-design-resource)

#### **实践**

最后，展示一下朋友的项目——云集（[http://lydiabox.com](https://link.uisdc.com/?redirect=http%3A%2F%2Flydiabox.com%2F)）的部分界面。这是一款浏览器，也是一个html5应用平台。功能结构不算复杂，但也有它的特殊性。非常适合用来理解material design，并尝试做一些变通。

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-1.jpg)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-2.jpg)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-3.jpg)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-4.jpg)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-5.jpg)

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/c-6.jpg)

**【加上这三篇，Material design学习资料就够了！】**

> **Material design到底有哪些过人之处？来这儿学习！**  
> [《超全面总结！深聊MATERIAL DESIGN引领的设计趋势》](http://www.uisdc.com/material-design-trends)

> **同样来自学霸的自学笔记，干货满满！**  
> [《学霸的自学笔记！Material Design设计规范学习心得》](http://www.uisdc.com/material-design-learning-experience)
> 
> **谷歌自家设计师对它的看法与实践心得：**  
> [《超赞！谷歌设计师的Material Design实践心得》](http://www.uisdc.com/material-design-google-io-app)

**原文地址：**[colachan](https://link.uisdc.com/?redirect=http%3A%2F%2Fcolachan.com%2Fpost%2F3416)  
**作者：**[@十萬個為什麽](https://link.uisdc.com/?redirect=http%3A%2F%2Fweibo.com%2Fgreenzorro)

【优设网 原创文章 投稿邮箱：2650232288@qq.com】

\================**关于优设网**\================  
"优设网[uisdc.com](http://www.uisdc.com/)"是国内人气最高的网页设计师学习平台，专注分享网页设计、无线端设计以及PS教程。  
**【特色推荐】**  
**设计师需要读的100本书**：史上最全的设计师图书导航：[http://hao.uisdc.com/book/](http://hao.uisdc.com/book/)。  
**设计微博**：拥有粉丝量88万的人气微博[@优秀网页设计](https://link.uisdc.com/?redirect=http%3A%2F%2Fe.weibo.com%2Fuidesign%2F) ，欢迎关注获取网页设计资源、下载顶尖设计素材。  
**设计导航**：全球顶尖设计网站推荐，设计师必备导航：[http://hao.uisdc.com](http://hao.uisdc.com/)  
**官方微信**：想在手机上、被窝里获取设计教程和各种意想不到的"福利"吗？添加优设哥微信号：**youshege**

![重磅教程！帮你全面彻底搞定Material design的学习笔记](https://image.uisdc.com/wp-content/uploads/2014/12/chat-yinliu-pic.png)