import stats1 from '@/assets/stats1.svg';
import stats2 from '@/assets/stats2.svg';

export const heroDescription = {
  tag: 'Comprehensive CRO Services for Pharma, Biotech & Medical Devices',
  description:
    'Indivirtus delivers end-to-end pharmaceutical consulting and CRO solutions—from toxicological risk assessments and regulatory compliance to medical device registration and GMP approvals. Our expertise spans computer system validation, equipment and HVAC calibration, NABL-accredited calibration (thermal, electro-technical, mechanical, pressure, mass & volume), and turnkey greenfield/brownfield projects. We also offer specialized training in GxP, cleaning validation, and quality systems—helping you accelerate approvals, ensure compliance, and scale with confidence.',
};

export const heroStats = [
  {
    key: 'pde',
    qty: 13000,
    description: 'PDE/OEL Reports as per<br />EMA/PICS/ APIC/WHO',
    image: { path: stats1, alt: 'stats picture icon1' },
  },
  {
    key: 'genotox',
    qty: 4200,
    description: 'Mutagenic & Genotox Assessments<br />as per ICH, M7',
    image: { path: stats2, alt: 'stats picture icon2' },
  },
];
