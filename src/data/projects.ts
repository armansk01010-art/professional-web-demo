import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'the-ivory-residence',
    slug: 'the-ivory-residence',
    title: 'The Ivory Residence',
    subtitle: 'A monochromatic coastal retreat defined by tactile stone and curved volumes',
    category: 'Residential',
    location: 'Worli, Mumbai',
    year: '2025 Concept',
    area: '4,800 sq.ft.',
    coverImage: '/images/project_ivory_residence.jpg',
    galleryImages: [
      '/images/project_ivory_residence.jpg',
      '/images/interior_monolithic_bedroom.jpg',
      '/images/detail_stone_materiality.jpg',
      '/images/hero_forme_architecture.jpg'
    ],
    excerpt: 'An introspective sanctuary situated high above the Arabian Sea, stripped of ornamental clutter to amplify daylight, honed travertine monoliths, and organic linen.',
    concept: 'The Ivory Residence explores the acoustic and psychological calm of radical reduction. Rather than imposing artificial ornament, the design relies on geometric massing, deep shadow reveals, and natural materials that patinate gracefully with age. Natural sea breezes filter through floor-to-ceiling sheer linen panels, while monolithic travertine plinths anchor the living spaces in grounded stillness.',
    description: [
      'Commissioned as a conceptual exploration for a collector couple in South Mumbai, The Ivory Residence responds to the intense sensory velocity of the city by cultivating an atmosphere of deep monastic stillness.',
      'Every partition was re-imagined as an architectural volume. Instead of standard drywalls, we proposed thick-set limewashed surfaces with integrated storage pockets, concealing audio systems, climatization registers, and private access doors.',
      'The central salon is framed by curved bouclé silhouettes that converse with a monumental honed travertine plinth. Daylight is treated as a physical building material: soft morning beams reflect off the hand-troweled plaster walls, shifting the tonal character of the stone from cool morning bone to amber warmth by sunset.'
    ],
    materials: [
      {
        name: 'Navona Travertine',
        finish: 'Honed & Unfilled',
        origin: 'Tivoli, Italy',
        description: 'Selected for its gentle creamy veining and matte, tactile surface that diffuses light without glare.'
      },
      {
        name: 'Hand-Troweled Limewash',
        finish: 'Ultra-Matte Mineral Plaster',
        origin: 'Rajasthan, India',
        description: 'Breathable artisanal lime finish that provides soft visual depth and micro-textured shadow gradients.'
      },
      {
        name: 'Natural Belgian Linen',
        finish: 'Raw Loom-State Weave',
        origin: 'Flanders, Belgium',
        description: 'Full-height acoustic drapery filtering harsh marine glare into a soft, diffused ambient glow.'
      },
      {
        name: 'Brushed Nickel Hardware',
        finish: 'Subtle Satin Patina',
        origin: 'Custom Fabricated',
        description: 'Custom-turned door levers and architectural cabinet pulls designed to feel weighty and silent in hand.'
      }
    ],
    architecturalHighlights: [
      'Curved partition walls optimizing natural air circulation and eliminating abrupt corners',
      'Concealed mechanical fixtures, flush architectural baseboards, and shadowline ceiling reveals',
      'Direct visual alignment framing unobstructed views of the Arabian Sea horizon',
      'Acoustic dampening strategy integrating natural linen ceilings and hidden sound absorption'
    ],
    credits: {
      principalDesigner: 'Kavita Menon, Lead Interior Architect',
      leadArchitect: 'Arjun Somani, Studio Director',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: true
  },
  {
    id: 'urban-minimal',
    slug: 'urban-minimal',
    title: 'Urban Minimal',
    subtitle: 'Introspective apartment living balancing smoked timber and monolithic microcement',
    category: 'Residential',
    location: 'Koregaon Park, Pune',
    year: '2025 Concept',
    area: '3,200 sq.ft.',
    coverImage: '/images/project_urban_minimal.jpg',
    galleryImages: [
      '/images/project_urban_minimal.jpg',
      '/images/interior_architectural_kitchen.jpg',
      '/images/project_oak_house.jpg',
      '/images/detail_stone_materiality.jpg'
    ],
    excerpt: 'A study in restraint within Pune’s tree-lined avenues, crafting a continuous architectural sequence of smoked oak, cast terrazzo, and low-slung seating.',
    concept: 'Urban Minimal investigates how spatial compression and expansion can turn an urban apartment into an urban retreat. By stripping back extraneous corridors and replacing internal walls with sliding timber louvers, the home allows daylight to wash across poured terrazzo planes while preserving zones of quiet intimacy.',
    description: [
      'Situated within an established residential enclave of Pune, this conceptual residence strips away extraneous domestic clutter in favor of continuous architectural volumes.',
      'The floor plane is rendered in seamless cast terrazzo, running from the arrival vestibule through to the deep garden terrace, eliminating threshold transitions. Against this cool neutral field, vertical oak ribs introduce rhythm, acoustic softness, and warmth.',
      'Every piece of loose furniture was designed bespoke to maintain low sightlines below 750mm, ensuring that when seated, the resident’s eye line engages purely with tree canopies and uninterrupted sky.'
    ],
    materials: [
      {
        name: 'Smoked European White Oak',
        finish: 'Dead-Flat Natural Polyurethane',
        origin: 'Sustainable Forestry, Germany',
        description: 'Deep warm grey-brown tone with open grain texture that absorbs ambient light.'
      },
      {
        name: 'Monolithic Cast Terrazzo',
        finish: 'Fine Aggregate Satin Hone',
        origin: 'Local Custom Blend, Pune',
        description: 'Continuous mineral flooring with muted river pebble chips for thermal cooling underfoot.'
      },
      {
        name: 'Blackened Architectural Steel',
        finish: 'Hand-Waxed Hot Rolled',
        origin: 'Artisanal Metal Foundry',
        description: 'Slender structural mullions and floating bookshelf partitions.'
      },
      {
        name: 'Chambray Wool Bouclé',
        finish: 'Textured Upholstery',
        origin: 'Biella, Italy',
        description: 'Heavy tactile weave bringing warmth and acoustic comfort to low lounge seating.'
      }
    ],
    architecturalHighlights: [
      'Pivot sliding screens enabling the living area to transform into a private studio within seconds',
      'Continuous 10-meter millwork bench extending from living room into reading nook',
      'Integrated planar lighting concealed behind architectural recessed reveals',
      'Dual-orientation cross-ventilation channeling evening breezes through Koregaon Park canopies'
    ],
    credits: {
      principalDesigner: 'Nikhil Rane, Senior Associate',
      leadArchitect: 'Arjun Somani, Studio Director',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: true
  },
  {
    id: 'the-oak-house',
    slug: 'the-oak-house',
    title: 'The Oak House',
    subtitle: 'A low-slung vineyard pavilion embedded in the Deccan plateau',
    category: 'Architecture',
    location: 'Gangapur Hills, Nashik',
    year: '2024 Concept',
    area: '6,400 sq.ft.',
    coverImage: '/images/hero_forme_architecture.jpg',
    galleryImages: [
      '/images/hero_forme_architecture.jpg',
      '/images/project_oak_house.jpg',
      '/images/interior_architectural_kitchen.jpg',
      '/images/interior_monolithic_bedroom.jpg'
    ],
    excerpt: 'Anchored into rugged basalt slopes, this concept residence merges rammed earth, fluted timber screens, and broad cantilevered roofs that shade private internal courtyards.',
    concept: 'The Oak House addresses the dramatic microclimate of the Nashik hills: intense dry midday sun followed by cool mountain nights. Broad horizontal roof overhangs protect glazed pavilions from direct solar gain, while heavy thermal basalt masses store diurnal heat and release it gently after dusk.',
    description: [
      'Conceived as a weekend refuge and wine tasting pavilion, The Oak House anchors itself firmly into the undulating topography overlooking Gangapur Lake.',
      'The architecture is arranged around two sheltered courtyard gardens planted with wild olive trees and native grasses. By breaking the mass of the building into interconnected single-story pavilions, internal spaces remain closely tethered to the soil.',
      'Materials were selected for durability in weathering: local black basalt quarried on-site form the massive perimeter walls, paired with sustainably harvested timber millwork that brings human warmth into intimate sleeping quarters.'
    ],
    materials: [
      {
        name: 'Local Basalt Masonry',
        finish: 'Chiseled & Dressed Rubble',
        origin: 'Nashik Valley Quarry',
        description: 'Dense, dark volcanic stone providing exceptional thermal mass and regional grounding.'
      },
      {
        name: 'Quarter-Sawn White Oak',
        finish: 'Natural Danish Oil',
        origin: 'Certified European Woodlands',
        description: 'Vertical wall paneling and structural post-and-beam elements with tight vertical grain.'
      },
      {
        name: 'Board-Formed Concrete',
        finish: 'Pine Grain Textured Cast',
        origin: 'In-Situ Cast',
        description: 'Expresses the honest process of fabrication through subtle timber-grain impressions.'
      },
      {
        name: 'Oxidized Zinc Roof Panels',
        finish: 'Pre-Weathered Quartz-Zinc',
        origin: 'Rheinzink',
        description: 'Durable architectural metal roofing designed to gently age alongside the changing seasons.'
      }
    ],
    architecturalHighlights: [
      'Cantilevered 3.5-meter roof eaves eliminating heat load while framing panoramic valley views',
      'Perimeter reflecting lap pool that acts as an evaporative cooler for incoming breezes',
      'Central glass-enclosed atrium garden separating entertaining wings from private guest suites',
      'Passive earth-berm integration sheltering bedrooms on the western slope'
    ],
    credits: {
      principalDesigner: 'Kavita Menon, Lead Interior Architect',
      leadArchitect: 'Devang Varma, Principal Architect',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: true
  },
  {
    id: 'atelier-workspace',
    slug: 'atelier-workspace',
    title: 'Atelier Workspace',
    subtitle: 'A tactile creative headquarters celebrating craft, physical models, and daylight',
    category: 'Commercial',
    location: 'Lower Parel, Mumbai',
    year: '2025 Concept',
    area: '5,600 sq.ft.',
    coverImage: '/images/project_atelier_workspace.jpg',
    galleryImages: [
      '/images/project_atelier_workspace.jpg',
      '/images/detail_stone_materiality.jpg',
      '/images/project_urban_minimal.jpg',
      '/images/interior_architectural_kitchen.jpg'
    ],
    excerpt: 'An adaptive reuse concept for a creative agency within Mumbai’s historic mill district, built around long communal oak workbenches and a floor-to-ceiling stone material library.',
    concept: 'Atelier Workspace reframes the corporate workplace as a craft guild workshop. In an era dominated by screens, this studio prioritizes tactile engagement: physical scale models, large material lay-out tables, and acoustic tranquility that encourages focused group collaboration without visual cacophony.',
    description: [
      'Located within an industrial compound formerly dedicated to textile manufacturing, Atelier Workspace preserves the soaring structural masonry volume while introducing clean contemporary interventions.',
      'The centerpiece of the studio is a monolithic 7-meter solid timber workbench, engineered without intermediate legs to foster seamless project pin-ups and cross-disciplinary workshops.',
      'Surrounding walls are lined with floor-to-ceiling floating stone ledges holding samples of marble, limestone, ceramics, textiles, and architectural maquettes. Overhead skylights flood the space with pure neutral daylight, essential for evaluating real material color palettes.'
    ],
    materials: [
      {
        name: 'French Limestone Block',
        finish: 'Rough Split-Face & Sawn Ledges',
        origin: 'Burgundy, France',
        description: 'Architectural display ledges that serve as the studio’s permanent material library.'
      },
      {
        name: 'Solid French Oak Plank',
        finish: 'Natural Matte Hardwax Oil',
        origin: 'Sustainably Managed Forest',
        description: 'Engineered communal drafting table designed to withstand heavy daily architectural studio use.'
      },
      {
        name: 'Acoustic Wool Felt Panels',
        finish: 'Natural Undyed Sheep Wool',
        origin: 'Bavaria, Germany',
        description: 'Absorbs reverberation across open workspaces while adding subtle visual warmth.'
      },
      {
        name: 'Cast Micro-Topping Cement',
        finish: 'Sealed Industrial Burnish',
        origin: 'Custom Aggregate Compound',
        description: 'Durable continuous flooring resilient to rolling drafting chairs and heavy model pedestals.'
      }
    ],
    architecturalHighlights: [
      'North-facing structural sawtooth skylights providing constant glare-free working illumination',
      'Hidden acoustic baffles achieving an exceptional reverberation time of 0.4 seconds',
      'Zoned collaborative lounge allowing informal client meetings beside an espresso bar',
      'Dedicated model workshop with custom dust-sealed extraction and physical mock-up staging'
    ],
    credits: {
      principalDesigner: 'Nikhil Rane, Senior Associate',
      leadArchitect: 'Arjun Somani, Studio Director',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: true
  },
  {
    id: 'the-quiet-retreat',
    slug: 'the-quiet-retreat',
    title: 'The Quiet Retreat',
    subtitle: 'A monolithic hill sanctuary framing the misty monsoon escarpments of Khandala',
    category: 'Architecture',
    location: 'Khandala Ghats, Lonavala',
    year: '2024 Concept',
    area: '7,200 sq.ft.',
    coverImage: '/images/project_quiet_retreat.jpg',
    galleryImages: [
      '/images/project_quiet_retreat.jpg',
      '/images/interior_monolithic_bedroom.jpg',
      '/images/hero_forme_architecture.jpg',
      '/images/detail_stone_materiality.jpg'
    ],
    excerpt: 'Rising from dense cliffside flora, this architectural retreat creates a sequence of stepped stone terraces, a sunken hearth, and open-air monsoon bathing pools.',
    concept: 'Designed to honor the dramatic rainfall and mist cycles of the Western Ghats, The Quiet Retreat utilizes concrete cantilever planes and stone gabions that age gracefully with moss and lichens. Spaces transition seamlessly between enclosed glass observation lounges and sheltered outdoor terraces.',
    description: [
      'Perched upon the ridgeline of Khandala, this concept explores the emotional weight of architectural shelter amidst turbulent mountain weather.',
      'During monsoon months, heavy rain cascaded off specialized copper downspouts into sunken stone cisterns, filling the interior with resonant acoustic music. During dry winter months, large glass panels slide entirely into concealed wall pockets, opening the house to cooling valley drafts.',
      'A sunken conversation pit lined in oiled teak wood sits flush with the stone floor, offering an intimate evening hearth centered around a wood-burning fireplace.'
    ],
    materials: [
      {
        name: 'Monolithic Poured Concrete',
        finish: 'Off-Form Architectural Polish',
        origin: 'Locally Sourced Fly-Ash Blend',
        description: 'Structural cantilevers that resist intense monsoon precipitation and high wind loads.'
      },
      {
        name: 'Reclaimed Burmese Teak',
        finish: 'Natural Tung Oil Finish',
        origin: 'Salvaged Colonial Estate Joinery',
        description: 'Rich warm timber used for the sunken conversation lounge, bed frames, and deep window seats.'
      },
      {
        name: 'Rough Flamed Kota Stone',
        finish: 'Antiqued Acid-Washed',
        origin: 'Rajasthan, India',
        description: 'Slip-resistant outdoor terrace paving that darkens dramatically when wet with rainwater.'
      },
      {
        name: 'Patinated Bronze Hardware',
        finish: 'Living Waxed Bronze',
        origin: 'Artisanal Foundry',
        description: 'Custom handles and architectural light fittings that develop an emerald patina over time.'
      }
    ],
    architecturalHighlights: [
      'Sunken outdoor conversation pit with integrated central fire pit and perimeter drainage',
      'Rainwater harvesting system funneling roof run-off into a 150,000-liter subterranean cistern',
      'Cantilevered master bedroom suite appearing to float over the 400-meter canyon drop',
      'Subtle perimeter LED grazing lights accentuating raw stone textures without glare'
    ],
    credits: {
      principalDesigner: 'Kavita Menon, Lead Interior Architect',
      leadArchitect: 'Devang Varma, Principal Architect',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: false
  },
  {
    id: 'modern-living',
    slug: 'modern-living',
    title: 'Modern Living',
    subtitle: 'A double-height duplex balancing tropical biophilia and quiet architectural discipline',
    category: 'Residential',
    location: 'Indiranagar, Bengaluru',
    year: '2025 Concept',
    area: '3,900 sq.ft.',
    coverImage: '/images/project_modern_living.jpg',
    galleryImages: [
      '/images/project_modern_living.jpg',
      '/images/interior_architectural_kitchen.jpg',
      '/images/interior_monolithic_bedroom.jpg',
      '/images/detail_stone_materiality.jpg'
    ],
    excerpt: 'An urban duplex celebrating vertical spatial volume, framed around an internal bamboo courtyard, tactile clay wall finishes, and custom bronze lighting.',
    concept: 'Modern Living explores the vertical dimension of contemporary Bangalore living. Rather than sealing off the home from the surrounding garden city, a two-story internal light well brings sky, rain, and greenery directly into the core of daily domestic routines.',
    description: [
      'Situated in Bengaluru’s vibrant Indiranagar district, this duplex conceptualizes a tranquil refuge for tech entrepreneurs seeking balance away from screen saturation.',
      'The heart of the design is a double-height living volume animated by an internal court containing a single mature Ficus tree and river boulders. An open-tread steel staircase with solid walnut treads floats alongside, casting graphic linear shadows across the plaster walls as the sun moves.',
      'Joinery and cabinetry are treated as quiet monolithic blocks. Storage is entirely flush and handle-less, maintaining an uncluttered visual plane that encourages mental focus and spatial decompression.'
    ],
    materials: [
      {
        name: 'Natural Clay Plaster',
        finish: 'Earth-Pigmented Matte',
        origin: 'Karnataka Earth Works',
        description: 'Regulates interior humidity naturally while imbuing rooms with an earthy, tactile serenity.'
      },
      {
        name: 'American Black Walnut',
        finish: 'Ultra-Matte Polyurethane',
        origin: 'North America',
        description: 'Lustrous chocolate grain used for floating stair treads, dining table, and bedroom paneling.'
      },
      {
        name: 'Flamed Grey Granite',
        finish: 'Thermal Texture',
        origin: 'Hosur Quarry, Karnataka',
        description: 'Durable monolithic kitchen island block with an integrated stone induction cooktop.'
      },
      {
        name: 'Raw Tussar Silk Drapery',
        finish: 'Handwoven Slub Weave',
        origin: 'Bihar Weavers Collective',
        description: 'Textured natural silk window drapery adding delicate softness to double-height voids.'
      }
    ],
    architecturalHighlights: [
      'Double-height 6.2-meter living room volume with motorized clerestory ventilation windows',
      'Internal bio-court filtering air and connecting lower living areas with the upper reading mezzanine',
      'Monolithic granite kitchen island cast as a single sculptural centerpiece',
      'Concealed magnetic architectural tracks allowing flexible spotlight positioning'
    ],
    credits: {
      principalDesigner: 'Nikhil Rane, Senior Associate',
      leadArchitect: 'Devang Varma, Principal Architect',
      photographyCredit: 'FORME Visualisation Studio (Concept Exploration)'
    },
    isFeatured: false
  }
];
