---
title: Python 实验4
order: 4
date: 2024-09-26 
category:
  - Python
tags:
  - Python 作业
---
## 8. excel数据绘制条形图
```python
"""
title: excel数据绘制条形图
author: Mr.Tzr
date: 2024-9-20
"""
# 导入所需模块
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 设置字体为黑体
plt.rcParams['font.sans-serif'] = ['SimHei']
# 处理负号显示问题
plt.rcParams['axes.unicode_minus'] = False

try: # 捕获异常
    # 读取 CSV 文件
    df = pd.read_csv('file/file3.csv', encoding='gbk')
    # 判断需要绘制的列是否在数据集中
    required_columns = ['姓名', '数学', '语文', '英语', '理综']
    if all(col in df.columns for col in required_columns): # 判断是否包含所有列
        # 转换数据为长格式，便于绘制
        df_melted = df.melt(id_vars='姓名', #x轴变量
                            value_vars=['数学', '语文', '英语', '理综'], #y轴变量
                            var_name='科目', value_name='分数' # 变量名
                            )
        # 绘制条形图
        sns.barplot(x='姓名', y='分数', hue='科目', data=df_melted) # 绘制条形图 hue 用于区分不同科目
        plt.savefig('file/file4.png', dpi=300) # 保存图片
        plt.show() # 显示图形
    else: # 列缺失
        print("数据集中缺少必要的列，请检查文件内容。") # 输出提示信息
except FileNotFoundError: # 文件不存在
    print("文件未找到，请检查文件路径。") # 输出提示信息
except Exception as e: # 其他异常
    print(f"发生错误: {e}") # 输出提示信息
```
结果如下：  
![An image](/assets/Python/task4/code8.png) 
