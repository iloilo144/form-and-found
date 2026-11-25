export const img = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=78`

export const HERO_SLIDES = [
  { id: '1600585154340-be6161a56a0c', caption: 'House on Arrábida, Setúbal', year: '2023' },
  { id: '1600596542815-ffad4c1539a9', caption: 'Casa Varela, Comporta', year: '2024' },
  { id: '1600047509807-ba8f99d2cdde', caption: 'Casa do Muro, Sintra', year: '2021' },
]

export const PROJECTS = [
  {
    id: 'casa-varela',
    name: 'Casa Varela',
    place: 'Comporta',
    type: 'Residence',
    year: 2024,
    image: '1600596542815-ffad4c1539a9',
    extra: ['1600573472550-8090b5e0745e', '1600607687939-ce8a6c25118c'],
    text: 'A holiday house set low among stone pines. Lime-washed walls, a single long roof and a pool that reads as a piece of the landscape rather than an object in it.',
    area: '310 m²',
  },
  {
    id: 'arrabida',
    name: 'House on Arrábida',
    place: 'Setúbal',
    type: 'Residence',
    year: 2023,
    image: '1600585154340-be6161a56a0c',
    extra: ['1616486338812-3dadae4b4ace', '1615874959474-d609969a20ed'],
    text: 'Built into a slope above the estuary. The living floor is a glass room between two concrete planes, shaded by a deep overhang that frames the evening light.',
    area: '240 m²',
  },
  {
    id: 'rua-do-sol',
    name: 'Atelier Rua do Sol',
    place: 'Lisbon',
    type: 'Workplace',
    year: 2023,
    image: '1497366216548-37526070297c',
    extra: ['1524758631624-e2822e304c36', '1493809842364-78817add7ffb'],
    text: 'A former print works turned into a shared studio for twenty people. We kept the factory windows and concrete floor and added a long timber library wall.',
    area: '520 m²',
  },
  {
    id: 'quinta-das-pedras',
    name: 'Quinta das Pedras',
    place: 'Douro Valley',
    type: 'Renovation',
    year: 2022,
    image: '1600566753190-17f0baa2a6c3',
    extra: ['1600210492486-724fe5c67fb0', '1502005229762-cf1b2da7c5d6'],
    text: 'The restoration of a granite farmhouse and the addition of a timber guest wing. New and old are kept honest: rough stone on one side, oiled larch on the other.',
    area: '460 m²',
  },
  {
    id: 'estrela',
    name: 'Apartment Estrela',
    place: 'Lisbon',
    type: 'Interior',
    year: 2022,
    image: '1600210492486-724fe5c67fb0',
    extra: ['1618221195710-dd6b41faaea6', '1586023492125-27b2c045efd7'],
    text: 'A 1900s apartment opened up around its original corridor. Walls were stripped back to plaster, and the joinery was designed with a local cabinet maker.',
    area: '145 m²',
  },
  {
    id: 'ceramics-pavilion',
    name: 'Pavilion for Ceramics',
    place: 'Caldas da Rainha',
    type: 'Cultural',
    year: 2021,
    image: '1487958449943-2429e8be8625',
    extra: ['1486718448742-163732cd1544', '1511818966892-d7d671e672a2'],
    text: 'A small exhibition pavilion for a ceramics museum, with folded white walls and a single skylight that changes the room every hour.',
    area: '180 m²',
  },
]

export const SERVICES = [
  {
    title: 'Architecture',
    text: 'New houses and small public buildings, from first site visit to the day you move in. We manage planning, consultants and construction on site.',
    items: ['Feasibility & site studies', 'Concept and planning design', 'Technical drawings', 'Site supervision'],
  },
  {
    title: 'Interiors',
    text: 'Complete interiors for homes, studios and hospitality. Layout, lighting, materials, joinery and the last objects on the shelf.',
    items: ['Spatial planning', 'Lighting design', 'Material & colour palettes', 'Bespoke joinery'],
  },
  {
    title: 'Renovation',
    text: 'Careful work on existing buildings. We like keeping what is good, removing what is tired and making the join between them visible.',
    items: ['Building surveys', 'Heritage consents', 'Energy upgrades', 'Adaptive reuse'],
  },
  {
    title: 'Furniture & objects',
    text: 'Tables, lights and small objects made with workshops in Portugal. They are designed for our projects and sometimes made in small editions.',
    items: ['One-off pieces', 'Small-batch editions', 'Prototyping with makers'],
  },
]

export const GALLERY = [
  { id: '1600607687939-ce8a6c25118c', caption: 'Living room, north light', ratio: 'wide' },
  { id: '1616486338812-3dadae4b4ace', caption: 'Lime plaster and oak', ratio: 'tall' },
  { id: '1600573472550-8090b5e0745e', caption: 'Stair to the garden', ratio: 'wide' },
  { id: '1615874959474-d609969a20ed', caption: 'Bedroom, early morning', ratio: 'tall' },
  { id: '1618221195710-dd6b41faaea6', caption: 'Library corner', ratio: 'wide' },
  { id: '1502005229762-cf1b2da7c5d6', caption: 'The light well', ratio: 'tall' },
]

export const PRINCIPLES = [
  {
    title: 'Daylight first.',
    text: 'Before we draw a wall we study the sun across the site, through every season. Most of our decisions start with where the light falls at four in the afternoon.',
  },
  {
    title: 'Fewer, better materials.',
    text: 'A house rarely needs more than four materials. We choose them early, buy them locally where we can, and let them age.',
  },
  {
    title: 'Build for the second owner.',
    text: 'Good buildings outlive their first brief. We design rooms that can change use, and details that can be repaired rather than replaced.',
  },
]
