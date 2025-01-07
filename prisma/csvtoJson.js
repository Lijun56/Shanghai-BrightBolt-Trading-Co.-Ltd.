import fs from 'fs';
import path from 'path';

const csvPath = path.join(process.cwd(), 'assets/Size-Pitch-Length_Table.csv');
const jsonPath = path.join(process.cwd(), 'assets/Size-Pitch-Length_Table.json');

const csvToJson = () => {
  const csvData = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvData.split('\n').slice(1); // Skip header
  
  const types = lines
    .filter(line => line.trim())
    .map(line => line.trim());

  fs.writeFileSync(jsonPath, JSON.stringify(types, null, 2));
  console.log('JSON file created successfully');
};

csvToJson();