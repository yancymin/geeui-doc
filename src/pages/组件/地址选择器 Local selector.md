---
title: "地址选择器 Local selector"
date: "2020-02-14"
---

---

地址数据的级联选择器。

## 原则

### 选择

从数据集合中进行选择时，用多级分类进行分隔，方便选择。

### 同浮层

在同一个浮层中完成选择，有较好的体验。

## 种类

![local-selector-1](local-selector-1.jpg)

### 默认地址选择器

展开下级菜单按照省市区级联。

## 结构

![local-selector-2](local-selector-2.jpg)

1. 标题
2. 选中反馈文字
3. 下拉图标
4. 容器
5. 级联导航
6. 选中状态

## 状态

![local-selector-3](local-selector-3.jpg)

## 颜色

| 色块                                                                | 名称  | 用处         | 色值    |
| :------------------------------------------------------------------ | :---- | :----------- | :------ |
| <span class="colorBlock" style="background-color: #3973FF;"></span> | 蓝 02 | 选中状态指示 | #3973FF |
| <span class="colorBlock" style="background-color: #292F3A;"></span> | 灰 01 | 选中文字     | #292F3A |
| <span class="colorBlock" style="background-color: #C0C4CC;"></span> | 灰 07 | 选框描边     | #C0C4CC |

## 文字

| 实例         | 字号（px） | 字重    | 行间距 (px) |
| :----------- | :--------- | :------ | :---------- |
| 文字         | 14         | Regular | 14          |
| 选中文字     | 14         | Medium  | 14          |
| 选中反馈文字 | 16         | Regular | 16          |

## 阴影

| 实例     | 名称    | 参数        | 颜色    |
| :------- | :------ | :---------- | :------ |
| 下拉容器 | 阴影 01 | 0px 2px 4px | #CCD0D9 |
