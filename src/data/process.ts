import { ProcessPhase } from '../types';

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    timeframe: 'Weeks 1 – 3',
    summary: 'A deep exploration into lifestyle rituals, site context, environmental factors, and spatial aspirations.',
    details: [
      'Site audit and comprehensive volumetric measure of existing architectural conditions',
      'Solar orientation, prevailing wind analysis, and microclimate documentation',
      'In-depth lifestyle ritual interviews exploring daily patterns, privacy needs, and sensory preferences',
      'Establishment of initial spatial programming, budget framework, and milestone schedules'
    ],
    deliverables: [
      'Site Analysis & Orientation Dossier',
      'Architectural Brief & Spatial Program',
      'Preliminary Project Roadmap & Feasibility Assessment'
    ]
  },
  {
    step: '02',
    title: 'Concept & Spatial Geometry',
    timeframe: 'Weeks 4 – 8',
    summary: 'Translating the brief into volumetric layouts, spatial flow, massing studies, and tactile material palettes.',
    details: [
      'Development of multiple layout iterations testing sightlines, light entry, and acoustic zoning',
      'Physical timber/cardboard study models alongside digital three-dimensional massing studies',
      'Curated physical material trays: natural stones, timber finishes, textured plasters, and fabrics',
      'Collaborative concept alignment workshops to lock the foundational architectural direction'
    ],
    deliverables: [
      'Schematic Architectural Layouts & Flow Studies',
      'Physical & Digital 3D Spatial Visualisations',
      'Curated Material Palette Board & Mood Specifications'
    ]
  },
  {
    step: '03',
    title: 'Design Development & Detailing',
    timeframe: 'Weeks 9 – 16',
    summary: 'Resolving every junction, bespoke joinery detail, lighting schedule, and MEP integration with rigorous precision.',
    details: [
      'Comprehensive 1:10 and 1:5 scale joinery shop drawings for all custom cabinetry and doors',
      'Architectural lighting schemes with circuit zoning, dimming profiles, and hidden reveal details',
      'Sanitaryware, ironmongery, and appliance schedules specified to millimetric precision',
      'Preparation of thorough tender documents and bill of quantities for qualified general contractors'
    ],
    deliverables: [
      'Complete Architectural & Interior Construction Drawing Sets',
      'Bespoke Joinery & Millwork Fabrication Packages',
      'MEP & Lighting Coordination Schematics',
      'Technical Specification Schedules & Contractor Tender Dossier'
    ]
  },
  {
    step: '04',
    title: 'Execution & Site Administration',
    timeframe: 'Duration of Construction',
    summary: 'Continuous on-site architectural oversight to protect the integrity of details, craftsmanship, and materiality.',
    details: [
      'Pre-construction contractor onboarding and clarification of critical architectural benchmarks',
      'Weekly scheduled site inspections inspecting rebar, casting, joinery framing, and stone dry-lays',
      'Review and approval of physical material mock-ups, plaster samples, and joinery prototypes',
      'Rigorous quality control, snagging audits, and turn-over certification before client move-in'
    ],
    deliverables: [
      'Periodic Site Observation Reports & Benchmark Certifications',
      'Material Mock-Up Approval Sign-offs',
      'Defect Rectification & Final Handover As-Built Dossier'
    ]
  }
];
