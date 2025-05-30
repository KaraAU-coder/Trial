# Base de Données Terminologique Médicale Multilingue

![Licence](https://img.shields.io/badge/Licence-CC_BY_4.0-blue) 
![Termes](https://img.shields.io/badge/Termes-180+-green)

Base de données de termes médicaux standardisés en anglais-chinois-français contenant 180+ concepts cliniques essentiels.

## Système d'Identification

### Structure des ID
`[Préfixe][3 chiffres]`

| Préfixe | Catégorie       | Exemple          |
|---------|-----------------|------------------|
| ANA     | Anatomie        | ANA001-Abdomen   |
| DIS     | Maladies        | DIS020-Gastrite  |
| PRO     | Procédures      | PRO138-Défibrillation |
| VIT     | Signes Vitaux   | VIT001-Pression artérielle |
| MED     | Médicaments     | MED010-Contre-indication |
| EME     | Urgences        | EME025-Hémorragie |

## Fichiers de Données

| Chemin du fichier          | Description                  |
|----------------------------|------------------------------|
| `data/terms_full.csv`      | Base complète (180+ termes)  |
| `data/terms_by_domain`     | Classés par spécialité médicale |

## Utilisation Rapide

```python
import pandas as pd

# Charger les données
df = pd.read_csv('data/terms_full.csv')

# Recherche par terme français
resultat = df[df['FR Term'].str.contains('pression')]
print(resultat[['ID', 'FR Term', 'EN Term']])
Guide de Contribution
Pour toute contribution :

Fournir les trois langues (EN/ZH/FR)

Maintenir l'unicité des ID

Ajouter des exemples cliniques pertinents

Licence
CC BY 4.0
Utilisation libre avec attribution requise.