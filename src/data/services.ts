import type { ImageMetadata } from 'astro';
import bedroom from '../assets/images/bedroom.jpg';
import bathroom from '../assets/images/bathroom.jpg';
import kitchen from '../assets/images/kitchen.jpg';
import extra from '../assets/images/extra.jpg';

export interface ServiceItem {
  title: string;
  image: ImageMetadata;
  imageAlt: string;
  items: string[];
}

export const services: ServiceItem[] = [
  {
    title: 'Bedroom',
    image: bedroom,
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
    image: bathroom,
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
    image: kitchen,
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
    image: extra,
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
