---
title: "按钮 Buttons"
date: "2020-02-14"
des: "按钮标记了一个操作命令，响应用户点击行为，用户点击触发得到相应的业务逻辑和结果，在用户界面中是一个非常重要的操作功能。"
---

---

## 原则

### 操作命令

响应用户点击行为，用户点击触发得到相应的业务逻辑和结果。

### 状态

按钮 5 种状态分别是 Normal、Hover、Press、Disabled、Active，给予用户不同感知。

## 种类

![button-1](./button-1.jpg)

### 主要按钮

高度强调，与主操作相关，通过使用填充容器颜色引导用户视觉聚焦在按钮之上，视觉比较突出，强用户点击的按钮。

![button-2](./button-2.jpg)

### 默认按钮

中等强调，常规操作，体积相对比较轻巧，具有按钮的功能性。

![button-3](./button-3.jpg)

### 图标按钮

主要按钮的基础上，在文本旁边放置图标，以澄清操作并引起对按钮的注意。

![button-4](./button-4.jpg)

### 文字链接按钮

文本链接按钮通常用于不太明显的操作，由于文本按钮没有容器，它们不会分散附近内容的注意力，视觉感受较弱。

## 结构

![button-5](./button-5.jpg)

1. 图标（可选）
2. 文字
3. 容器

## 状态

![button-6](./button-6.jpg)

## 颜色

| 色块                                                                                                                                         | 名称    | 用处     | 色值              |
| :------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------- | :---------------- |
| <span class="colorBlock" style="background: linear-gradient(180deg, #648CFF 0%, #3973FF 100%);"></span>                                      | 渐变 02 | 按钮默认 | #648CFF - #3973FF |
| <span class="colorBlock" style="background: linear-gradient(180deg, #7394FF 0%, #4E82FF 100%);"></span>                                      | 渐变 03 | 按钮悬停 | #7394FF - #4E82FF |
| <span class="colorBlock" style="background: linear-gradient(180deg, #4D7BFF 0%, #154DEB 100%);"></span>                                      | 渐变 01 | 按钮激活 | #4D7BFF - #154DEB |
| <span class="colorBlock" style="background: #B0C7FF;"></span>                                                                                | 灰蓝 03 | 按钮失效 | #B0C7FF           |
| <span class="colorBlock" style="background: linear-gradient(180deg, #FFFFFF 0%, #F2F2F7 100%);border: 1px solid rgba(0, 0, 0, 0.1);"></span> | 渐变 04 | 按钮默认 | #FFFFFF - #F2F2F7 |
| <span class="colorBlock" style="background: #E5E9F0;"></span>                                                                                | 灰 12   | 按钮悬停 | #E5E9F0           |
| <span class="colorBlock" style="background: #D8DDE6;"></span>                                                                                | 灰 10   | 按钮激活 | #D8DDE6           |
| <span class="colorBlock" style="background: #DFE3EB;"></span>                                                                                | 灰 11   | 按钮失效 | #DFE3EB           |
| <span class="colorBlock" style="background: #ffffff;border: 1px solid rgba(0, 0, 0, 0.1);"></span>                                           | 白      | 按钮文字 | #FFFFFF           |
| <span class="colorBlock" style="background: #3973FF;"></span>                                                                                | 蓝 02   | 按钮文字 | #3973FF           |
| <span class="colorBlock" style="background: #292F3A;"></span>                                                                                | 灰 01   | 按钮文字 | #292F3A           |

## 文字

| 实例     | 字号（px） | 字重   | 行间距（px） |
| :------- | :--------- | :----- | :----------- |
| 按钮文字 | 14         | Medium | 14           |

## 阴影

| 实例 | 名称    | 参数        | 颜色    |
| :--- | :------ | :---------- | :------ |
| 容器 | 阴影 01 | 0px 2px 4px | #CCD0D9 |
