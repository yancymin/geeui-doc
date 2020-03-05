---
title: "日期选择器 Date picker"
date: "2020-02-14"
des: "日期选择器允许选择（或键入）特定的日期和年份。"
---

---

## 原则

### 清晰

清楚地指出重要日期，例如当前日期和选定日期。

### 直觉

为确保选择日期的直观，使用常见的选择器模式。

## 种类

![date-picker-1](./date-picker-1.jpg)

### 基础日期选择器

用户可以直接在日历 UI 中选择特定的日期。

![date-picker-2](./date-picker-2.jpg)

### 日期范围选择器

允许选择日期范围，同时显示日历和日期输入字段，结束日期不得小于开始日期。

## 结构

![date-picker-3](./date-picker-3.jpg)

1. 文本框
2. 月份切换
3. 预设日期范围选项栏 （基础日期选择器无此项）
4. 选中日期
5. 年和月的选择

## 状态

![date-picker-4](./date-picker-4.jpg)

## 颜色

| 色块                                                                | 名称    | 用处         | 色值    |
| :------------------------------------------------------------------ | :------ | :----------- | :------ |
| <span class="colorBlock" style="background-color: #3973FF;"></span> | 蓝 02   | 选中状态指示 | #3973FF |
| <span class="colorBlock" style="background-color: #292F3A;"></span> | 灰 01   | 文字         | #292F3A |
| <span class="colorBlock" style="background-color: #909399;"></span> | 灰 04   | 星期文字     | #909399 |
| <span class="colorBlock" style="background-color: #C0C4CC;"></span> | 灰 07   | 文本框描边   | #C0C4CC |
| <span class="colorBlock" style="background-color: #F2F5FA;"></span> | 灰 13   | Hover        | #F2F5FA |
| <span class="colorBlock" style="background-color: #7888A6;"></span> | 蓝灰 01 | 默认图标填充 | #7888A6 |

## 文字

| 实例           | 字号（px） | 字重    | 行间距（px） |
| :------------- | :--------- | :------ | :----------- |
| 文本框文字     | 14         | Regular | 14           |
| 天数、年份文字 | 16         | Regular | 16           |
| 月份选择文字   | 18         | Regular | 18           |

## 阴影

| 实例 | 名称    | 参数         | 颜色    |
| :--- | :------ | :----------- | :------ |
| 容器 | 阴影 02 | 0px 6px 12px | #CCD0D9 |
