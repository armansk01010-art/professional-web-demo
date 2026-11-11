import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'residential-interiors',
    number: '01',
    title: 'Residential Interiors',
    tagline: 'Introspective domestic environments shaped by spatial purity, daylight, and enduring materials.',
    description: 'We conceive residential interiors as sanctuaries of calm. Our approach strips away superficial trends to focus on volumetric proportions, intuitive spatial flow, tactile natural materials, and the quiet choreography of daylight across living spaces.',
    extendedDescription: 'Every home we design begins with an extensive investigation into daily human rituals—how light enters at breakfast, where conversations unfold in the evening, and how acoustic calm can be cultivated within dense urban centers. We design bespoke joinery, source honest raw materials, and collaborate closely with master craftspeople to create interiors that gain character with age rather than succumbing to rapid stylistic obsolescence.',
    scope: [
      'Spatial planning, layout optimization, and circulation studies',
      'Custom millwork, architectural joinery, and bespoke furniture design',
      'Material curation, finish schedules, and artisanal stone sourcing',
      'Atmospheric architectural lighting design and circadian control',
      'Curated art, textile, and sanitaryware specification',
      'Turnkey site observation and meticulous detail coordination'
    ],
    deliverables: [
      'Comprehensive schematic floor plans and demolition/construction sets',
      'Bespoke joinery millwork shop drawings at 1:10 and 1:5 scales',
      'Tactile physical material moodboard trays for client review',
      'Detailed mechanical, electrical, and plumbing (MEP) coordination sets',
      'Full technical specification schedules for contractor procurement'
    ],
    idealFor: 'Private homeowners, penthouse collectors, and residential patrons seeking an enduring, architecturally cohesive living environment.',
    image: '/src/assets/images/project_ivory_residence_1794222045437.jpg',
    imageAlt: 'Residential interior design featuring honed travertine plinth and curved bouclé seating'
  },
  {
    id: 'commercial-interiors',
    number: '02',
    title: 'Commercial Interiors',
    tagline: 'Inspiring workspaces, hospitality sanctuaries, and cultural spaces built for focus and human connection.',
    description: 'We design commercial environments that reflect institutional identity with restraint and dignity. Rather than transient novelty, we deliver durable, acoustically balanced spaces that foster deep focus, natural collaboration, and dignified hospitality.',
    extendedDescription: 'A commercial interior is both an operational engine and a sensory embodiment of an organization’s ethos. We prioritize spatial clarity, healthy indoor environmental quality, ergonomic integrity, and sustainable lifecycle performance. From creative studios and family offices to boutique hospitality suites, our work balances private introspection with communal energy.',
    scope: [
      'Workplace programming, team density analysis, and spatial zoning',
      'Reception, boardroom, and client presentation suite design',
      'Acoustic modeling and custom perforated acoustic wall systems',
      'Integrated technology concealment and flexible power routing',
      'Bespoke reception desks, meeting tables, and breakout furniture',
      'Lighting schemes engineered for circadian wellbeing and eye comfort'
    ],
    deliverables: [
      'Zoned architectural layouts and occupancy safety plans',
      'Custom furniture design documentation and fabrication packages',
      'Acoustic reverberation specifications and test criteria',
      'Contractor tender documentation and contractor evaluation matrix',
      'Periodic construction administration and defect rectification tracking'
    ],
    idealFor: 'Creative agencies, progressive family offices, executive headquarters, boutique hotel suites, and design galleries.',
    image: '/src/assets/images/project_atelier_workspace_1794222045719.jpg',
    imageAlt: 'Commercial workspace design featuring large communal timber drafting table and limestone material wall'
  },
  {
    id: 'architecture',
    number: '03',
    title: 'Architecture',
    tagline: 'Contextual, site-responsive buildings that harmonize with their climate, topography, and landscape.',
    description: 'Our architectural practice designs from the landscape inward. We craft private residences, weekend pavilions, and cultural outposts rooted in structural honesty, deep roof overhangs, passive climate moderation, and a profound respect for their physical setting.',
    extendedDescription: 'We believe buildings should feel inevitably grounded in their site. We study the microclimate, solar azimuth, prevailing breezes, and geological strata before drawing the first line. Our structures celebrate the honest weight of stone, timber, and concrete, employing shaded verandas, internal courtyards, and thermal mass to achieve comfortable indoor conditions with minimal mechanical reliance.',
    scope: [
      'Site feasibility, solar orientation, and topographical analysis',
      'Conceptual architectural massing and volumetric studies',
      'Passive environmental design and natural ventilation strategies',
      'Facade engineering, glazing design, and solar shading louvers',
      'Structural integration in collaboration with civil engineers',
      'Landscape integration, courtyard design, and rainwater retention'
    ],
    deliverables: [
      'Comprehensive master planning and building elevation packages',
      'Physical wooden scale models and photo-realistic digital studies',
      'Statutory drawing sets coordinated with local municipal architects',
      'Comprehensive construction drawings, wall sections, and envelope details',
      'Weekly architectural site supervision during critical casting phases'
    ],
    idealFor: 'Patrons developing private family residences, rural retreats, vineyard outposts, or boutique institutional pavilions.',
    image: '/src/assets/images/project_quiet_retreat_1794376498933.jpg',
    imageAlt: 'Contextual architecture villa in the mountain mist with cantilevered basalt slabs and reflecting pool'
  },
  {
    id: 'design-consultation',
    number: '04',
    title: 'Design Consultation',
    tagline: 'Strategic architectural advisory, feasibility evaluation, and material direction for selective patrons.',
    description: 'For clients in early planning stages, we provide rigorous architectural advisory. We evaluate site viability, critique existing architectural plans, formulate material strategies, and establish realistic project budgets before construction commitments are made.',
    extendedDescription: 'A successful project is often decided during the earliest conceptual milestones. Our advisory service offers independent, objective architectural counsel without the premature pressure of construction contracts. We review property acquisitions, assess zoning opportunities, audit developer floor plans for spatial inefficiencies, and curate cohesive material strategies that establish a solid project trajectory.',
    scope: [
      'Pre-acquisition property evaluation and light/circulation audit',
      'Peer review and architectural optimization of existing floor plans',
      'Material palette formulation and sensory mood curation',
      'Budget feasibility benchmarks and realistic project phasing',
      'Guidance on contractor procurement and master artisan selection'
    ],
    deliverables: [
      'Written architectural audit report with annotated schematic sketches',
      'Tailored material and sensory mood catalogue for the project',
      'Redlined spatial optimization plans identifying circulation bottlenecks',
      'Actionable recommendations roadmap for project execution'
    ],
    idealFor: 'Prospective property buyers, collectors evaluating renovations, and clients seeking expert architectural direction prior to procurement.',
    image: '/src/assets/images/detail_stone_materiality_1794376526401.jpg',
    imageAlt: 'Architectural design consultation material tray with travertine, white oak, and living bronze'
  }
];
