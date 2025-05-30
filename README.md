# Multilingual Medical Terminology Database

![License](https://img.shields.io/badge/License-CC_BY_4.0-blue) 
![Terms](https://img.shields.io/badge/Terms-180+-green)

Standardized English-Chinese-French clinical terminology database containing 180+ core medical terms.

## ID System

### Encoding Rule
`[Category Prefix][3-digit Number]`

| Prefix | Category        | Example            |
|--------|-----------------|--------------------|
| ANA    | Anatomy               | ANA001-Abdomen            |
| BAS    | Basic Terms           | BAS002-Airway             |
| DIA    | Diagnostics           | DIA008-CT Scan            |
| DIS    | Diseases              | DIS020-Gastritis          |
| EME    | Emergency             | EME025-Hemorrhage         |
| INS    | Instruments           | INS006-Bandage            |
| LAB    | Lab Tests             | LAB023-Hemoglobin         |
| MED    | Medications           | MED010-Contraindication   |
| PAT    | Pathogens             | PAT005-Bacteria           |
| PRO    | Procedures            | PRO138-Defibrillation     |
| STA    | Status                | STA026-Hydration          |
| SYM    | Symptoms              | SYM014-Dizziness          |
| TRE    | Treatments            | TRE013-Dialysis           |
| VIT    | Vital Signs           | VIT001-Blood Pressure     |

## Data Files

| File Path               | Description               |
|-------------------------|---------------------------|
| `data/terms_full.csv`   | Complete terminology set  |
| `data/terms_by_domain`  | Domain-specific subsets   |

## Quick Start

```python
import pandas as pd

# Load data
df = pd.read_csv('data/terms_full.csv')

# Search by English term
result = df[df['EN Term'].str.contains('blood pressure')]
print(result[['ID', 'EN Term', 'ZH Term']])
Contribution Guide
When submitting improvements:

Include all three language versions

Maintain ID uniqueness

Add clinically relevant examples

License
CC BY 4.0
Free to use with attribution required.

