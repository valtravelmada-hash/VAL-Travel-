import { Destination, Service, Testimonial } from './types';
import { 
  Palmtree, 
  Map, 
  Hotel, 
  Car, 
  Plane, 
  Users,
  Compass
} from 'lucide-react';

export const DESTINATIONS: Destination[] = [
  {
    id: 'nosy-iranja',
    title: 'Nosy Iranja',
    description: 'Known as "Turtle Island", this paradise features two islands connected by a 2km white sandbar accessible at low tide. Crystal clear waters and sea turtles await.',
    imagePrompt: 'Aerial photography of Nosy Iranja Madagascar, two lush green islands connected by a long pristine white sandbar, surrounded by crystal clear turquoise ocean, sunny tropical weather, high resolution, travel photography style',
    price: 'From €80'
  },
  {
    id: 'nosy-tanikely',
    title: 'Nosy Tanikely',
    description: 'A protected marine reserve offering the best snorkeling in the region. Swim with colorful fish, sea turtles, and explore the vibrant coral reef.',
    imagePrompt: 'Underwater photography in Nosy Tanikely Madagascar, vibrant coral reef with colorful tropical fish and a sea turtle, clear blue water, sun rays penetrating the water, photorealistic 4k',
    price: 'From €60'
  },
  {
    id: 'lokobe',
    title: 'Lokobe Reserve',
    description: 'Immerse yourself in the primary forest. Discover lemurs, chameleons, and the unique flora of Madagascar in this pristine nature reserve.',
    imagePrompt: 'Lush tropical rainforest in Lokobe Reserve Madagascar, sunlight filtering through large green ferns and trees, a lemur sitting on a branch, exotic nature photography, detailed and vibrant',
    price: 'From €55'
  },
  {
    id: 'nosy-sakatia',
    title: 'Nosy Sakatia',
    description: 'The Orchid Island. Experience authentic village life, swim with giant green turtles, and enjoy a private beach lunch.',
    imagePrompt: 'A secluded pristine beach on Nosy Sakatia Madagascar, orchid flowers in foreground, traditional wooden pirogue boat on calm turquoise water, white sand, tropical paradise, golden hour light',
    price: 'From €50'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'tailor-made',
    title: 'Tailor-Made Trips',
    description: 'We design your dream itinerary based on your preferences, budget, and travel style.',
    icon: Compass
  },
  {
    id: 'group-tours',
    title: 'Group Tours',
    description: 'Join small, friendly groups to explore the best destinations at an affordable rate.',
    icon: Users
  },
  {
    id: 'hotels',
    title: 'Hotel Booking',
    description: 'From luxury resorts to cozy eco-lodges, we find the perfect stay for you.',
    icon: Hotel
  },
  {
    id: 'rentals',
    title: 'Vehicle Rentals',
    description: 'Rent reliable 4x4s, quads, or scooters to explore the island at your own pace.',
    icon: Car
  },
  {
    id: 'transfers',
    title: 'Airport Transfers',
    description: 'Seamless and comfortable transfers from Fascene Airport to your hotel.',
    icon: Plane
  },
  {
    id: 'consulting',
    title: 'Travel Consulting',
    description: 'Expert advice on logistics, visas, and hidden gems in Madagascar.',
    icon: Map
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Tom',
    location: 'United Kingdom',
    comment: 'Val Travel organized our honeymoon perfectly. The trip to Nosy Iranja was the highlight of our lives! Professional and friendly team.',
    rating: 5,
    imagePrompt: 'Portrait of a happy couple on a tropical beach at sunset, smiling at camera, wearing casual summer clothes, golden lighting, ocean background, photorealistic'
  },
  {
    id: '2',
    name: 'Jean-Pierre',
    location: 'France',
    comment: 'Excellent service. The car rental was smooth, and the suggested itinerary for the North was breathtaking. Highly recommended.',
    rating: 5,
    imagePrompt: 'Portrait of a middle-aged man adventurer, wearing a hat and sunglasses, smiling, natural tropical background with trees, bright daylight, photorealistic'
  },
  {
    id: '3',
    name: 'Elena R.',
    location: 'Italy',
    comment: 'Authentic experience! We loved the village tour in Nosy Sakatia. Val Travel truly cares about showing the real Madagascar.',
    rating: 5,
    imagePrompt: 'Portrait of a young woman traveler, smiling warmly, holding a tropical drink, luxury resort background with blue pool and ocean, sunny day, photorealistic'
  }
];

export const CONTACT_INFO = {
  whatsapp: '+261 376 788 546',
  email: 'valtravelmada@gmail.com',
  address: 'Nosy Be, Madagascar',
  socials: {
    facebook: '#',
    instagram: '#'
  }
};