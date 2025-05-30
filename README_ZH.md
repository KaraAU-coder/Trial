# 医疗术语多语言数据库

![许可证](https://img.shields.io/badge/许可证-CC_BY_4.0-blue) 
![术语数量](https://img.shields.io/badge/术语-180+-green)

英-中-法三语对照临床术语库，包含180+核心医疗术语。

## 术语ID系统

### 编码规则
`[类别前缀][3位数字]`

| 前缀 | 类别       | 示例术语       |
|------|------------|----------------|
| ANA  | 解剖学     | ANA001-腹部    |
| DIS  | 疾病       | DIS020-胃炎    |
| PRO  | 医疗操作   | PRO138-除颤    |
| VIT  | 生命体征   | VIT001-血压    |
| MED  | 药物       | MED010-禁忌症  |
| EME  | 急诊       | EME025-出血    |

## 数据文件

| 文件路径               | 描述                 |
|------------------------|----------------------|
| `data/terms_full.csv`  | 完整术语表（180+条） |
| `data/terms_by_domain` | 按临床领域分类       |

## 快速使用

```python
import pandas as pd

# 加载数据
df = pd.read_csv('data/terms_full.csv')

# 按中文术语搜索
result = df[df['ZH Term'].str.contains('血压')]
print(result[['ID', 'ZH Term', 'EN Term']])
贡献指南
提交改进时请确保：

包含完整的三个语言版本

保持ID唯一性

补充临床相关示例句

许可证
CC BY 4.0
允许自由使用，需注明来源
