---
title: "对话框 Modal"
date: "2020-02-14"
des: "对话框是叠加在主界面上的弹出视图，要求用户作出反应，进行信息处理或判断操作。Gee-UI 里的对话框以模态对话框为主。"
---

---

## 原则

### 简洁易懂

对话框的主题应该简洁易懂、一目了然。

### 目的清晰

对话框上的按钮需要给用户清晰的选项。

### 模态化

当模态对话框打开后，用户不能继续之前的任务，除非对话框被终止。


## 种类

![modal-1](modal-1.jpg)

### 操作对话框

以浮层的方式，承载相应的操作。

![modal-2](modal-2.jpg)

### 确认对话框

以浮层的方式，提示用户的操作。

## 结构

![modal-3](modal-3.jpg)

1. 标志
2. 信息文本
3. 标题容器
4. 取消图标
5. 容器
6. 按钮

## 状态

![modal-4](modal-4.jpg)

## 颜色

| 色块                                                                                                    | 名称    | 用处         | 色值              |
| :------------------------------------------------------------------------------------------------------ | :------ | :----------- | :---------------- |
| <span class="colorBlock" style="background: linear-gradient(180deg, #648CFF 0%, #3973FF 100%);"></span> | 渐变 02 | 按钮默认     | #648CFF - #3973FF |
| <span class="colorBlock" style="background-color: #292F3A;"></span>                                     | 灰 01   | 文字颜色     | #292F3A           |
| <span class="colorBlock" style="background-color: #7888A6;"></span>                                     | 灰蓝 01 | 图标颜色     | #7888A6           |
| <span class="colorBlock" style="background-color: #D8DDE6;"></span>                                     | 灰 10   | 输入框描边   | #D8DDE6           |
| <span class="colorBlock" style="background-color: #F2F5FA;"></span>                                     | 灰 13   | 标题容器底色 | #F2F5FA           |

## 文字

| 实例     | 字号（px） | 字重    | 行间距（px） |
| :------- | :--------- | :------ | :----------- |
| 标题     | 18         | Regular | 18           |
| 信息文本 | 16         | Regular | 16           |
| 按钮文字 | 14         | Medium  | 14           |

## 阴影

| 实例 | 名称    | 参数          | 颜色        |
| :--- | :------ | :------------ | :---------- |
| 容器 | 阴影 03 | 0px 12px 29px | #292F3A/40% |
