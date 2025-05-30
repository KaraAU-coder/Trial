const fs = require('fs');
const csv = require('csv-parser');

// Ensure docs/data directory exists
if (!fs.existsSync('docs/data')){
    fs.mkdirSync('docs/data', { recursive: true });
}

const results = [];

fs.createReadStream('medical_glossary1.0.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('docs/data/terms.json', JSON.stringify(results, null, 2));
    console.log(`Success! Converted medical_glossary1.0.csv to docs/data/terms.json`);
    console.log(`Total terms processed: ${results.length}`);
  })
  .on('error', (error) => {
    console.error('Conversion failed:', error);
  });