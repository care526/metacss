# meta-css文档

## 项目结构
```js
metas  
├── modules  
│   ├── box.scss  
│   ├── flex.scss  
│   ├── float.scss  
│   ├── font.scss  
│   ├── height.scss  
│   ├── margin.scss  
│   ├── other.scss  
│   ├── padding.scss  
│   ├── position.scss  
│   └── width.scss  
├── vars.scss  
└── index.scss  
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
| start | center | end | space-between | space-around |
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
