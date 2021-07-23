# meta-css文档

> 平常在写项目的页面的时候，需要定义大量的css class写样式
> 这个库将一些基础的css样式原子化，通过css class组合的方式达到效果

## 使用
- 原子类css文件(px)  
  node_modules/@carelj/metacss/dist/index.min.css (61kb)  
  node_modules/@carelj/metacss/dist/index.half.min.css (34kb)  
  half是去除了奇数值的精简版  
  因为文件中相同字符很多，gzip后文件大小降低为原大小的1/6  
- 扩展文件  
  node_modules/@carelj/metacss/dist/expand.scss

## 项目结构
```js
├── dist
│   ├── expand.scss 
│   ├── index.half.min.css
│   └── index.min.css 
└── metas
    ├── modules  
    │   ├── box.scss  
    │   ├── color.scss  
    │   ├── flex.scss  
    │   ├── float.scss  
    │   ├── other.scss  
    │   ├── position.scss
    │   └── aboutUnit
    │       ├── font.scss  
    │       ├── height.scss  
    │       ├── margin.scss  
    │       ├── other.scss  
    │       ├── padding.scss  
    │       ├── positionValue.scss  
    │       └── width.scss  
    ├── vars.scss  
    └── index.scss  
```

## scss变量
```scss
// 单位
$unit: 'px';

$baseMaxNum: 100; // 基础数值
$borderMaxNum: 10; // 圆角数值
$fontMaxNum: 60; // 字体数值

// 不过滤奇数数值的原子类
$notFilterOdd: true;

// 打包部分模块
$isPackPadding: true;
$isPackMargin: true;
$isPackWidth: true;
$isPackHeight: true;
$isPackFont: true;
$isPackPositionValue: true;
```

## 整体的设计规范
属性简写 - 描述 _ 值  
```css
fw           font-weight: bold;  
fs_20        font-size: 20px;  
mg-t_30      margin-top: 30px; 
``` 
描述和值不一定同时存在  

## 一些缩略字母代表的意思
根据具体适用的css属性参考    
||||
| :-: | :-: | :-: |
| block | inline | inline-block |
| b | i | ib |
****

|||||
| :-: | :-: | :-: | :-: |
| top | bottom | left | right |
| t | b | l | r |  
****

||||||
| :-: | :-: | :-: | :-: | :-: |
| flex-start | center | flex-end | space-between | space-around |
| s | c | e | sb | sa |  
****

|||
| :-: | :-: |
| 横轴 | 纵轴 |
| h | v |
****

||
| :-: |
| auto |
| a |
****

## 当前已经整合的css样式
### box
display -> dp  
```css
dp_b
dp_i
dp_ib
```
### color
c -> color
```css
c_0
c_3
c_6
c_9
```
### flex
```css
flex1
```
行 row  
```css
row-v_s      
row-h_sb
row_c_c
row-wp_w
row-wp_wr
```
列 column  

```css
column-v_s      
column-h_sb
column_c_c
column-wp_w
column-wp_wr
```

### float
```css
fl
fr
```
### font
字体大小  
fs -> font-size  
12 ~ 60 和 70 80 90 100 110 120px    
```css
fs_12
```
行高  
lh -> line-height  
12 ~ 100px   
```css
lh_22
```
字重  
fw -> font-weight  
数值类型 100 200 300 400 500 600 700 800 900  
```css
fw
fwer
fw_100
```
排版 - 对齐  
ta -> text-align  
```css
ta_l
ta_c
ta_r
```
### height
h -> height  
0 ~ 100px   
```css
h_45
```

### margin
mg -> margin  
```css
mg_12
mg-h_10
mg-h_a
mg-v_10
mg-v_a
mg-t_30
mg-b_40
mg-l_50
mg-r_60
```

### other
|||
| :-: | :-: |
| pointer | not-allowed |
| p | na |
****
手势  
cs -> cursor
```css
cs_p
cs_na
```

层级  
zi -> z-index  
0 ~ 10
```css
zi_4
```

透明度
op -> opacity
0.1 ~ 1
数值放大了10倍
```css
op_1
op_10
```

圆角
br -> border-radius
0 ~ 20 偶数
```css
br_4
```

### padding
pd -> padding  
```css
pd_12
pd-h_10
pd-h_a
pd-v_10
pd-v_a
pd-t_30
pd-b_40
pd-l_50
pd-r_60
```

### position
|||||
| :-: | :-: | :-: | :-: |
| relative | absolute | fixed | sticky |
| r | a | f | s |
****
pt -> position
```css
pt_r
pt_a
pt_f
pt_s
```
0 ~ 100px  
```css
t_14
b_30
l_50
r_89
```
### width
w -> width  
0 ~ 100px   
```css
w_45
```

## 扩展
> 扩展的目的
> 如果将每个数值的原子类都列出来
> 库的大小就爆炸了
> 这里支持你用一些库没有提供对应数值的原子类

sass mixin  
```js
w_x(110)
h_x(200)
fs_x(56)
lh_x(45)
mg_x(800)
mg-h_x(101)
mg-v_x(280)
mg-t_x(157)
mg-b_x(137)
mg-l_x(489)
mg-r_x(245)
pd_x(123)
pd-h_x(432)
pd-v_x(569)
pd-t_x(970)
pd-b_x(156)
pd-l_x(139)
pd-r_x(179)
t_x(365)
b_x(264)
l_x(178)
r_x(641)
```
x：代表参数，格式同已经定义的原子类
```scss
// 具体使用
@include fs_x(89)
```
less文件的扩展后续会补充
