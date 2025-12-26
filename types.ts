
export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'House' | 'Condo' | 'Townhome' | 'Borey' | 'Shophouse' | 'Land';
  listingType: 'Sale' | 'Rent';
  imageUrl: string;
  images: string[];
  description: string;
  yearBuilt: number;
  amenities: string[];
  lat: number;
  lng: number;
  agentName: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[]; // property IDs
  myListings: string[]; // property IDs
}

export interface FilterOptions {
  location: string;
  minPrice: number;
  maxPrice: number;
  beds: string;
  baths: string;
  listingType: 'Sale' | 'Rent';
  propertyType: string;
}
export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  avatar: string;
  propertiesCount: number;
  experienceYears: number;
  languages: string[];
}
