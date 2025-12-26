
import { Property, Agent } from './types';


export const MOCK_AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'Sokha Mean',
    role: 'Senior Luxury Specialist',
    specialty: 'BKK1 & Diamond Island',
    phone: '+855 12 345 678',
    email: 'sokha.mean@estateflow.com',
    avatar: 'https://i.pravatar.cc/150?u=a1',
    propertiesCount: 15,
    experienceYears: 8,
    languages: ['Khmer', 'English', 'Chinese']
  },
  {
    id: 'a2',
    name: 'Rithy Khmer',
    role: 'Residential Sales Manager',
    specialty: 'Borey & Gated Communities',
    phone: '+855 12 987 654',
    email: 'rithy.khmer@estateflow.com',
    avatar: 'https://i.pravatar.cc/150?u=a2',
    propertiesCount: 22,
    experienceYears: 6,
    languages: ['Khmer', 'English']
  },
  {
    id: 'a3',
    name: 'Malis Eng',
    role: 'Listing Strategy Expert',
    specialty: 'Commercial & Shophouses',
    phone: '+855 99 111 222',
    email: 'malis.eng@estateflow.com',
    avatar: 'https://i.pravatar.cc/150?u=a3',
    propertiesCount: 12,
    experienceYears: 4,
    languages: ['Khmer', 'English', 'French']
  },
  {
    id: 'a4',
    name: 'Vanna Sophea',
    role: 'Siem Reap Regional Lead',
    specialty: 'Boutique Villas & Land',
    phone: '+855 88 555 666',
    email: 'vanna.sophea@estateflow.com',
    avatar: 'https://i.pravatar.cc/150?u=a4',
    propertiesCount: 9,
    experienceYears: 5,
    languages: ['Khmer', 'English']
  },
  {
    id: 'a5',
    name: 'Boly Sophat',
    role: 'Investment Consultant',
    specialty: 'High-yield Land Investments',
    phone: '+855 12 000 999',
    email: 'boly.sophat@estateflow.com',
    avatar: 'https://i.pravatar.cc/150?u=a5',
    propertiesCount: 7,
    experienceYears: 10,
    languages: ['Khmer', 'English', 'Chinese']
  }
];

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse in BKK1',
    address: 'Street 302, BKK1, Phnom Penh',
    price: 350000,
    beds: 3,
    baths: 3,
    sqft: 180,
    type: 'Condo',
    listingType: 'Sale',
    imageUrl: '/properties/penthouse.png',
    images: [
      '/properties/penthouse.png',
    ],
    description: 'A masterpiece of contemporary living, this ultra-luxurious penthouse occupies the top two floors of a premier BKK1 residential tower. Designed with floor-to-ceiling glass walls, the residence offers an unparalleled 360-degree panorama of the Phnom Penh skyline and the Mekong River. The interior features Italian marble flooring, a professional-grade gourmet kitchen with Miele appliances, and a private internal elevator. The master suite includes a spa-like bathroom with a freestanding stone tub and a massive walk-in wardrobe.',
    yearBuilt: 2023,
    amenities: [
      'Private Rooftop Pool', '24h Concierge', 'Professional Gym', 'Secure VIP Parking',
      'Smart Home System', 'Wine Cellar', 'Private Elevator', 'High-Speed Fiber Internet'
    ],
    lat: 11.5526,
    lng: 104.9238,
    agentName: 'Sokha Mean'
  },
  {
    id: '2',
    title: 'Modern Borey Villa',
    address: 'Borey Peng Huoth, Chbar Ampov, Phnom Penh',
    price: 480000,
    beds: 5,
    baths: 6,
    sqft: 320,
    type: 'Borey',
    listingType: 'Sale',
    imageUrl: '/properties/borey_villa.png',
    images: [
      '/properties/borey_villa.png'
    ],
    description: 'Located in the prestigious Borey Peng Huoth Grand Star Platinum, this King Villa represents the pinnacle of gated community living in Cambodia. The property boasts a majestic double-height entrance hall, multiple formal and informal living areas, and a lushly landscaped private garden with a koi pond. Each of the five bedrooms is a full suite with handcrafted cabinetry and premium fixtures. Perfect for discerning families who value privacy, security, and a community of high-net-worth neighbors.',
    yearBuilt: 2021,
    amenities: [
      'Gated Community', 'Landscape Garden', 'Children\'s Playground', 'Private Clubhouse',
      '24/7 Patrol Security', 'Tennis Courts', 'Backup Generator', 'Solar Water Heating'
    ],
    lat: 11.5200,
    lng: 104.9500,
    agentName: 'Rithy Khmer'
  },
  {
    id: '3',
    title: 'Traditional Shophouse',
    address: 'Toul Tom Poung I (Russian Market), Phnom Penh',
    price: 2500,
    beds: 4,
    baths: 4,
    sqft: 200,
    type: 'Shophouse',
    listingType: 'Rent',
    imageUrl: '/properties/shophouse.png',
    images: ['/properties/shophouse.png'],
    description: 'Renovated shophouse near the Russian Market. Excellent for small business on ground floor and living quarters above.',
    yearBuilt: 1995,
    amenities: ['Prime Location', 'Mezzanine', 'Balcony'],
    lat: 11.5400,
    lng: 104.9150,
    agentName: 'Dara Chan'
  },
  {
    id: '4',
    title: 'Siem Reap Boutique Villa',
    address: 'Wat Bo Road, Siem Reap',
    price: 180000,
    beds: 2,
    baths: 2,
    sqft: 120,
    type: 'House',
    listingType: 'Sale',
    imageUrl: '/properties/siem_reap_villa.png',
    images: ['/properties/siem_reap_villa.png'],
    description: 'Charming boutique villa in a quiet area of Siem Reap. Just minutes away from the Angkor Wat temple complex.',
    yearBuilt: 2019,
    amenities: ['Private Pool', 'Tropical Garden', 'Fully Furnished'],
    lat: 13.3633,
    lng: 103.8591,
    agentName: 'Vanna Sophea'
  },
  {
    id: '5',
    title: 'Riverside Land Plot',
    address: 'Koh Pich (Diamond Island), Phnom Penh',
    price: 1200000,
    beds: 0,
    baths: 0,
    sqft: 500,
    type: 'Land',
    listingType: 'Sale',
    imageUrl: '/properties/land.png',
    images: ['/properties/land.png'],
    description: 'Prime investment opportunity on Diamond Island. High-potential land for commercial or residential development.',
    yearBuilt: 0,
    amenities: ['Riverside View', 'Commercial Potential'],
    lat: 11.5580,
    lng: 104.9400,
    agentName: 'Sokha Mean'
  }
];
