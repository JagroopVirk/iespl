// import fs from 'fs';
// import path from 'path';
// import { pathToFileURL } from 'url';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const folderPath = path.join(__dirname, '@/data/js/services'); // make sure this matches your folder

// /** @typedef {{ id: number, name: string }} Service */

// /** @type {Service[]} */

// const services = [];

// const files = fs.readdirSync(folderPath);

// for (const file of files) {
//   if (file.endsWith('.js')) {
//     const filePath = path.join(folderPath, file);
//     const fileURL = pathToFileURL(filePath);
//     const module = await import(fileURL);

//     if (module && module.default) {
//       services.push(module.default);
//     } else {
//       console.warn(`File ${file} has no default export`);
//     }
//   }
// }

import adepde from '@/data/js/services/ade-pde-oel';
import msdsSds from '@/data/js/services/msds-sds';
import calibration from '@/data/js/services/calibration';
import gmpAudits from '@/data/js/services/gmpAudits';
import gmpComplianceTrainings from '@/data/js/services/gmpComplianceTrainings';
import greenfieldBrownfield from '@/data/js/services/greenfieldBrownfield';
import pharmacovigilance from '@/data/js/services/pharmacovigilance';
import regulatoryAffairs from '@/data/js/services/regulatoryAffairs';
import riskAssessment from '@/data/js/services/riskAssessment';
import validation from '@/data/js/services/validation';
import containmentValidation from '@/data/js/services/containmentValidation';

const services = [
  adepde,
  riskAssessment,
  containmentValidation,
  msdsSds,
  pharmacovigilance,
  calibration,
  regulatoryAffairs,
  gmpComplianceTrainings,
  gmpAudits,
  greenfieldBrownfield,
  validation,
];

export default services;
