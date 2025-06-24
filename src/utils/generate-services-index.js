// scripts/generate-services-index.js
import fs from 'fs';
import path from 'path';

const folderPath = path.resolve('./src/data/js/services');
const files = fs.readdirSync(folderPath).filter((file) => file.endsWith('.js'));

const imports = files.map((file, i) => {
  const varName = `service${i}`;
  return `import ${varName} from './${file}';`;
});

const exportList = files.map((_, i) => `service${i}`).join(',\n  ');

const output = `${imports.join('\n')}\n\nconst services = [\n  ${exportList}\n];\n\nexport default services;\n`;

fs.writeFileSync(path.join(folderPath, 'index.js'), output);
console.log('services/index.js generated');
