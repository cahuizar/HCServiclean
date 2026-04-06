export interface ServiceItem {
  title: string;
  image: string;
  imageAlt: string;
  items: string[];
}

export const services: ServiceItem[] = [
  {
    title: 'Bedroom',
    image: '/images/bedroom.jpg',
    imageAlt: 'Clean, well-made bedroom in an Indiana home',
    items: [
      'Dust picture frames, ceiling fans, lamp shades, and blinds',
      'Clean and vacuum hardwood floors',
      'Doors and door frames spot clean',
      'Flat surfaces hand wiped',
    ],
  },
  {
    title: 'Bathroom',
    image: '/images/bathroom.jpg',
    imageAlt: 'Sparkling clean bathroom with fresh towels',
    items: [
      'Clean tile walls, bathtubs, showers, toilets, vanity, and sink',
      'Mop floors',
      'General dusting',
      'Vacuum carpets',
    ],
  },
  {
    title: 'Kitchen',
    image: '/images/kitchen.jpg',
    imageAlt: 'Clean modern kitchen with polished countertops',
    items: [
      'Clean countertops and the front of all appliances',
      'Vacuum and damp mop the floors',
      'Microwave wiped out',
      'General dusting',
    ],
  },
  {
    title: 'Extras',
    image: '/images/extra.jpg',
    imageAlt: 'Additional cleaning services and special requests',
    items: [
      'Clean inside the fridge',
      'Clean inside oven',
      'Clean interior windows',
      'Clean inside cabinets',
      'Wash & dry laundry',
      'Baseboard deep clean',
    ],
  },
];
