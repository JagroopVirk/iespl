
export const services = [

    {
    id: "svc-pde-001",
    reportType: "PDE",
    title: "PDE Report Preparation",
    shortDescription: "Determine Permitted Daily Exposure limits for APIs based on ICH Q3D and EMA guidelines.",
    detailedDescription: `Comprehensive toxicological evaluation and PDE calculation, including NOAEL/LOAEL assessment, uncertainty factors, and final justification. Used for cleaning validation and cross-contamination control.`,
    priceModel: "Fixed",
    estimatedDuration: "10 business days",
    deliverables: [
      "PDE Report (PDF)",
      "Toxicological Justification",
      "Calculation Summary"
    ],
    regulatoryBasis: ["ICH Q3D", "EMA"],
    targetClients: ["Pharma", "API Manufacturer", "CMO"],
    requiresClientData: true,
    expertise: ["Toxicology", "Risk Assessment"],
    status: "active", // or "inactive"
    icon: "🧪",
  },
  {
    id: "svc-ade-001",
    reportType: "ADE",
    title: "ADE Report Development",
    shortDescription: "Assessment of Acceptable Daily Exposure to support risk-based cleaning and contamination limits.",
    detailedDescription: `Scientific evaluation and calculation of ADE values based on EMA guidelines, including toxicological and pharmacological data integration.`,
    priceModel: "Fixed",
    estimatedDuration: "8 business days",
    deliverables: [
      "ADE Report (PDF)",
      "Executive Summary",
      "Risk Justification"
    ],
    regulatoryBasis: ["EMA", "WHO"],
    targetClients: ["CMO", "Pharma"],
    requiresClientData: true,
    expertise: ["Pharmacology", "Regulatory Affairs"],
    status: "active",
    icon: "📉",
  },
  {
    id: "svc-oel-001",
    reportType: "OEL",
    title: "OEL Assessment",
    shortDescription: "Establish workplace safety limits for airborne exposure to pharmaceutical compounds.",
    detailedDescription: `Comprehensive toxicological and occupational health assessment to define OEL values for safe handling during manufacturing.`,
    priceModel: "Per Report",
    estimatedDuration: "15 business days",
    deliverables: [
      "OEL Report",
      "Airborne Exposure Limit Table",
      "Toxicity Profile"
    ],
    regulatoryBasis: ["OSHA", "ACGIH", "NIOSH"],
    targetClients: ["Manufacturing", "CMO", "API Supplier"],
    requiresClientData: true,
    expertise: ["Industrial Hygiene", "Toxicology"],
    status: "active",
    icon: "🏭",
  },
  {
    id: "svc-oeb-001",
    reportType: "OEB",
    title: "OEB Classification",
    shortDescription: "Assign occupational exposure bands for early-phase compounds or when OEL is not available.",
    detailedDescription: `Based on available toxicology, potency, and pharmacology data, compounds are banded using structured frameworks such as PhRMA or ISPE.`,
    priceModel: "Fixed",
    estimatedDuration: "5 business days",
    deliverables: [
      "OEB Justification Document",
      "Band Assignment Chart",
      "Data Evaluation Table"
    ],
    regulatoryBasis: ["ISPE", "PhRMA", "NIOSH"],
    targetClients: ["Biotech", "Pharma R&D"],
    requiresClientData: true,
    expertise: ["Occupational Safety", "Toxicology"],
    status: "active",
    icon: "🧬",
  },
  // 📁 PHARMACOVIGILANCE & TOXICOLOGY
  {
    id: "svc-pv-001",
    reportType: "Pharmacovigilance",
    title: "Pharmacovigilance Services",
    shortDescription: "Monitoring and managing safety of medicinal products post-marketing.",
    detailedDescription: "Pharmacovigilance services including AE reporting, PSUR, PADER, DSUR and signal detection to ensure ongoing product safety.",
    priceModel: "Per Project",
    estimatedDuration: "Depends on scope",
    deliverables: ["Safety Reports", "Case Management"],
    regulatoryBasis: ["ICH E2E", "EMA", "FDA"],
    targetClients: ["Pharma", "Biotech"],
    requiresClientData: true,
    expertise: ["Safety Surveillance", "Regulatory Compliance"],
    status: "active",
    icon: "🩺"
  },
  {
    id: "svc-genotox-001",
    reportType: "Toxicology",
    title: "Genotoxic Evaluation of Impurities",
    shortDescription: "Genotoxicity assessment as per ICH Q3 guidelines.",
    detailedDescription: "Genotoxic (Mutagenic) risk assessment of impurities following ICH Q3A(R2), Q3B(R2), Q3C(R8), and M7 guidelines.",
    priceModel: "Fixed",
    estimatedDuration: "7–10 business days",
    deliverables: ["Toxicological Risk Report", "Mutagenicity Evaluation"],
    regulatoryBasis: ["ICH Q3A(R2)", "Q3B(R2)", "Q3C(R8)", "M7"],
    targetClients: ["API", "Pharma"],
    requiresClientData: true,
    expertise: ["Toxicology", "Risk Assessment"],
    status: "active",
    icon: "🧬"
  },

  // 📜 REGULATORY COMPLIANCE
  {
    id: "svc-safety-001",
    reportType: "Regulatory",
    title: "Finished Product Safety Assessment",
    shortDescription: "Prepare safety evaluation reports for formulations.",
    detailedDescription: "Comprehensive safety assessment of finished pharmaceutical formulations based on toxicological data and regulatory guidelines.",
    priceModel: "Fixed",
    estimatedDuration: "10 business days",
    deliverables: ["Safety Assessment Report"],
    regulatoryBasis: ["EMA", "ICH"],
    targetClients: ["Pharma", "Regulatory Consultants"],
    requiresClientData: true,
    expertise: ["Formulation Safety", "Toxicology"],
    status: "active",
    icon: "💊"
  },
  {
    id: "svc-sds-001",
    reportType: "Regulatory",
    title: "MSDS/SDS Preparation",
    shortDescription: "Authoring Material Safety Data Sheets.",
    detailedDescription: "Preparation of MSDS/SDS for APIs, intermediates, and finished products as per GHS standards.",
    priceModel: "Fixed",
    estimatedDuration: "5 business days",
    deliverables: ["SDS Document", "Classification Sheet"],
    regulatoryBasis: ["GHS", "REACH"],
    targetClients: ["API", "Chemical"],
    requiresClientData: true,
    expertise: ["Toxicology", "Documentation"],
    status: "active",
    icon: "📄"
  },
  {
    id: "svc-ctd-001",
    reportType: "Regulatory",
    title: "CTD/ACTD Dossier Preparation",
    shortDescription: "Dossier preparation and review for global submission.",
    detailedDescription: "Preparation, submission, and review of CTD/ACTD dossiers including Module 1–5 content and regional requirements.",
    priceModel: "Per Project",
    estimatedDuration: "Project dependent",
    deliverables: ["CTD/ACTD Modules", "Summary Reports"],
    regulatoryBasis: ["ICH M4", "ASEAN Guidelines"],
    targetClients: ["Pharma", "Biotech"],
    requiresClientData: true,
    expertise: ["Regulatory Affairs", "Documentation"],
    status: "active",
    icon: "📚"
  },
  {
    id: "svc-device-001",
    reportType: "Regulatory",
    title: "Medical Device Registration (India)",
    shortDescription: "Class A–D device registration with CDSCO as per MDR 2017.",
    detailedDescription: "Preparation and submission of medical device registration dossiers for CDSCO approval under MDR-17.",
    priceModel: "Per Filing",
    estimatedDuration: "20–30 business days",
    deliverables: ["Device File", "CDSCO Submission Package"],
    regulatoryBasis: ["MDR-2017", "CDSCO"],
    targetClients: ["Medical Device Manufacturers"],
    requiresClientData: true,
    expertise: ["Medical Device Regulation"],
    status: "active",
    icon: "🩻"
  },

  // 🔄 TECHNOLOGY TRANSFER
  {
    id: "svc-tt-001",
    reportType: "Tech Transfer",
    title: "Technology Transfer Services",
    shortDescription: "Transfer of processes from R&D to GMP sites.",
    detailedDescription: "Support in transferring formulation or API manufacturing process from R&D labs to commercial GMP facilities.",
    priceModel: "Project-Based",
    estimatedDuration: "Variable",
    deliverables: ["Tech Transfer Plan", "Process Validation"],
    regulatoryBasis: ["ICH Q10", "WHO TRS"],
    targetClients: ["Pharma", "API Manufacturers"],
    requiresClientData: true,
    expertise: ["Tech Transfer", "Process Development"],
    status: "active",
    icon: "🔄"
  },

  // 🧱 GREENFIELD/BROWNFIELD PROJECTS
  {
    id: "svc-project-001",
    reportType: "Projects",
    title: "Turnkey Project – Finished Dosage Forms",
    shortDescription: "End-to-end setup of formulation facilities.",
    detailedDescription: "Design and execution of Greenfield/Brownfield pharmaceutical manufacturing plants for finished dosage forms.",
    priceModel: "Turnkey",
    estimatedDuration: "6–12 Months",
    deliverables: ["Facility Layout", "Utilities Design", "Regulatory Readiness"],
    regulatoryBasis: ["WHO TRS", "Schedule M"],
    targetClients: ["Pharma"],
    requiresClientData: true,
    expertise: ["Facility Design", "Engineering"],
    status: "active",
    icon: "🏭"
  },
  {
    id: "svc-project-002",
    reportType: "Projects",
    title: "Turnkey Project – API Manufacturing",
    shortDescription: "Custom-built API facilities from concept to completion.",
    detailedDescription: "Complete project management and compliance planning for new or existing API manufacturing units.",
    priceModel: "Turnkey",
    estimatedDuration: "6–12 Months",
    deliverables: ["Plant Design", "Process Equipment Plan"],
    regulatoryBasis: ["ICH Q7", "GMP"],
    targetClients: ["API Manufacturers"],
    requiresClientData: true,
    expertise: ["API Plant Design", "Tech Transfer"],
    status: "active",
    icon: "⚙️"
  },

  // 🏅 GMP APPROVALS
  {
    id: "svc-gmp-001",
    reportType: "GMP Approval",
    title: "GMP Audit & Vendor Assessment",
    shortDescription: "GMP audits and vendor qualification support.",
    detailedDescription: "Audit and assess manufacturing facilities, vendors, and plant infrastructure to ensure GMP readiness.",
    priceModel: "Per Audit",
    estimatedDuration: "5–10 Days",
    deliverables: ["Audit Report", "GAP Analysis"],
    regulatoryBasis: ["WHO TRS", "Schedule M"],
    targetClients: ["Pharma", "API"],
    requiresClientData: true,
    expertise: ["GMP Auditing", "Compliance"],
    status: "active",
    icon: "🔍"
  },
  // 🎓 TRAINING SERVICES
  {
    id: "svc-train-001",
    reportType: "Training",
    title: "Training on Cleaning Validation",
    shortDescription: "GMP-compliant cleaning validation training.",
    detailedDescription: "In-depth training for professionals on cleaning validation strategies, execution, and documentation as per regulatory standards.",
    priceModel: "Per Session",
    estimatedDuration: "1 Day",
    deliverables: ["Training Certificate", "Presentation Material"],
    regulatoryBasis: ["FDA", "EU GMP", "WHO"],
    targetClients: ["Pharma", "QA/QC Teams"],
    requiresClientData: false,
    expertise: ["Validation", "GMP Compliance"],
    status: "active",
    icon: "📘"
  },
  {
    id: "svc-train-002",
    reportType: "Training",
    title: "Training on GxP (GLP, GMP, GCP, GDP)",
    shortDescription: "Comprehensive GxP compliance training.",
    detailedDescription: "Covers all aspects of Good Practices including GLP, GMP, GCP, and GDP tailored for pharma operations.",
    priceModel: "Per Session",
    estimatedDuration: "1–2 Days",
    deliverables: ["Training Manual", "Certificate"],
    regulatoryBasis: ["WHO", "ICH"],
    targetClients: ["Pharma", "Clinical Teams"],
    requiresClientData: false,
    expertise: ["Quality Systems", "Compliance"],
    status: "active",
    icon: "📙"
  },

  // ⚖️ CALIBRATION LAB SERVICES
  {
    id: "svc-calib-thermal",
    reportType: "Calibration",
    title: "Thermal Calibration (NABL Accredited)",
    shortDescription: "Calibration for temperature and RH instruments.",
    detailedDescription: "Accredited calibration of ovens, incubators, furnaces, RH meters, and thermometers with traceable standards.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["Pharma Labs", "Manufacturers"],
    requiresClientData: true,
    expertise: ["Metrology", "Thermal Systems"],
    status: "active",
    icon: "🌡️"
  },
  {
    id: "svc-calib-electro",
    reportType: "Calibration",
    title: "Electro Technical Calibration",
    shortDescription: "Calibration of electrical parameters.",
    detailedDescription: "AC/DC current, voltage, resistance, and frequency calibration performed with NABL-accredited standards.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["Pharma", "Instrumentation Labs"],
    requiresClientData: true,
    expertise: ["Electrical Calibration"],
    status: "active",
    icon: "⚡"
  },
  {
    id: "svc-calib-mech",
    reportType: "Calibration",
    title: "Mechanical Calibration",
    shortDescription: "Dimensional and speed calibration.",
    detailedDescription: "Mechanical calibrations including length, speed, and acoustics for pharma instruments as per NABL scope.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["QA/QC Labs", "Production Units"],
    requiresClientData: true,
    expertise: ["Mechanical Metrology"],
    status: "active",
    icon: "📏"
  },
  {
    id: "svc-calib-pressure",
    reportType: "Calibration",
    title: "Pressure/Vacuum Calibration",
    shortDescription: "Calibration for pressure instruments.",
    detailedDescription: "Services include calibration of pressure/vacuum gauges, magnehelic gauges, transmitters and safety valves.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["Engineering", "Pharma"],
    requiresClientData: true,
    expertise: ["Pressure/Vacuum Systems"],
    status: "active",
    icon: "🔧"
  },
  {
    id: "svc-calib-mass",
    reportType: "Calibration",
    title: "Mass & Volume Calibration",
    shortDescription: "Calibration of weighing and volumetric instruments.",
    detailedDescription: "Calibration services for weights, balances, pipettes, burettes and volumetric devices under NABL scope.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["QC Labs", "Production"],
    requiresClientData: true,
    expertise: ["Mass Metrology", "Volume Calibration"],
    status: "active",
    icon: "⚖️"
  },
  {
    id: "svc-calib-other",
    reportType: "Calibration",
    title: "Other Calibrations",
    shortDescription: "Specialized calibration services.",
    detailedDescription: "Calibration of pH meters, conductivity, TDS, ORP, flow meters and other laboratory instruments.",
    priceModel: "Per Instrument",
    estimatedDuration: "1–2 Days",
    deliverables: ["Calibration Certificate"],
    regulatoryBasis: ["NABL ISO/IEC 17025"],
    targetClients: ["R&D", "QC Labs"],
    requiresClientData: true,
    expertise: ["Chemical Metrology"],
    status: "active",
    icon: "🧪"
  }
];








// Create schema for following services and add to the exiting services catalog
// •	PDE reports
// •	ADE reports
// •	OEL reports
// •	OEB reports
// •	PHARMACOVIGILANCE
// •	Genotoxic (Mutagenic) Evaluation of impurities as per ICH Q3
// •	A (R2), ICH Q3 B (R2), ICH Q3 C (R8) & ICH M7 guidelines.
// •	Safety Assessment Report of Finished Formulations
// •	Preparation of MSDS/SDS
// •	REGULATORY COMPLIANCE
// •	MEDICAL DEVICE REGISTRATION
// •	Preparation, Submission and Review of the CTD/ ACTD Dossiers
// •	Medical device (Class-A, B, C & D) Filing & Submission to CDSCO as per MDR-17 rule
// •	CEP/DMF Filing & Submission to EDQM/FDA/Health Canada
// •	Clinical/Non-Clinical Overview and Bio Waiver Preparation
// •	Managing Regulatory Response & Remediation Activities
// •	M.A.H. representation
// •	Qualified Person (Q.P.) & Batch Releasing & Testing Site for Europe Submission
// •	Toxicological Risk Assessment of Medical Devices
// •	Computer system validation
// •	validation of Laboratory Systems (HPLC/GC/KF/UV/FTIR/POLARIMETER)
// •	validation of Process Automation Systems (PLC/HMI/SCADA/IPC)
// •	validation of Environment Monitoring Systems (EMS)
// •	validation of Enterprise Applications (SAP/ERP/LIMS/DMS/QMS/LMS etc.)
// •	validation of Temperature Mapping (SIP/ Autoclave/ Tunnel/ Cold Room/Warehouse)
// •	validation of HVAC (DOP/Air Velocity/NVPC/Filter Integrity)
// •	GMP APPROVALS FROM REGULATORY AUTHORITIES
// •	Vender Assessment Audits for Plant & Product Approvals
// •	Assessment of Plant Layout Design, Equipment, Infrastructure, Process Flow, Flow of Man & Material, Raw Material and FG Store, Documentation
// •	Assessment of Validation, Calibration & Qualification
// •	Assessment of CAPA and Risk Management with Appropriate Mitigation and Contingency Plan
// •	Assessment of GAP Assessment as per Schedule M Guideline
// •	TECHNOLOGY TRANSFER
// •	R&D to GMP site transfer
// •	Formulation Development & Technology Transfer
// •	Know How Based Technology Transfer
// •	Analytical Method Development & Validations
// •	GREENFIELD/ BROWNFIELD PROJECTS
// •	Turnkey Pharmaceutical Project of Finished Dosage Forms
// •	Turnkey Pharmaceutical Project of Active Pharmaceutical Ingredients
// •	Turnkey Pharmaceutical Project of Intermediates
// •	TRAINING On Cleaning Validation, TRAINING On GxP (GLP, GMP, GCP, GDP etc.)
// •	TRAINING On Revised Schedule M
// •	TRAINING On WHO TRS guidelines and Annexures
// •	TRAINING On Pharmaceutical Quality Systems like Data Integrity, Quality Culture etc.
// •	TRAINING On Quality Management Systems
// •	CALIBRATION LAB (NABL ACCREDITED) Thermal: Temperature & Relative Humidity (RH), IR Thermometers, Furnace, Oven etc.
// •	CALIBRATION LAB (NABL ACCREDITED) Electro Technical: AC/DC Current, Voltage, Resistance, Inductance, Time, Frequency etc.
// •	CALIBRATION LAB (NABL ACCREDITED) Mechanical: Dimension, Speed & Acoustics, Length etc.
// •	CALIBRATION LAB (NABL ACCREDITED) Pressure/Vacuum: Pressure/Vacuum/Magnehelic Gauges, Transmitter, Safety Valves etc.
// •	CALIBRATION LAB (NABL ACCREDITED) Mass & Volume: Weights, Weighing Balance, Pipettes, Burettes etc.
// •	CALIBRATION LAB (NABL ACCREDITED) Others: pH Meters, ORP, Conductivity Meters, TDS, Flow Meter etc.

