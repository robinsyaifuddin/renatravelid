
// Destination image mappings with real URLs
const destinationImages = {
  'geopark-ciletuh': [
    'https://images.app.goo.gl/PSeNLg2Tkq7wZFXeA',
    'https://images.app.goo.gl/ew7SaTyBaMj6BDBT7',
    'https://images.app.goo.gl/dW9PHE7sdzrfQd3Y8'
  ],
  'twa-papandayan': [
    'https://images.app.goo.gl/F186jqSpMb1ArdfW9',
    'https://images.app.goo.gl/MXuVXJRo5efsnBso6',
    'https://images.app.goo.gl/H34C6Re5iJCRwAVp8'
  ],
  'wisata-baduy': [
    'https://images.app.goo.gl/aa6xerBVkkq8mt7N7',
    'https://images.app.goo.gl/boKpGrEFLjAU43BaA',
    'https://images.app.goo.gl/hhAqG6DyC8tvdNcbA'
  ],
  'pulau-harapan': [
    'https://images.app.goo.gl/mybEbYUN9WyvE5f8A',
    'https://images.app.goo.gl/V37UdLWupCeSzH9t9',
    'https://images.app.goo.gl/kLofj7iurHXEfiqy6'
  ],
  'pulau-tidung': [
    'https://images.app.goo.gl/jv2fLeoiV4bAPTrDA',
    'https://images.app.goo.gl/JD6dRHsoFr8jgNBk8',
    'https://images.app.goo.gl/pdcVoSupamYerF7s8'
  ],
  'pulau-pramuka': [
    'https://images.app.goo.gl/XxXR6FKnS3PKbLSXA',
    'https://images.app.goo.gl/9UHRcgqFcPRoDHRK7',
    'https://images.app.goo.gl/hecyhUugdz6HfAYT7'
  ],
  'ujung-genteng': [
    'https://images.app.goo.gl/LFSNmUPUcGuerRuM9',
    'https://images.app.goo.gl/mUD1CEEBKMBpv3Xz9',
    'https://images.app.goo.gl/VXCLuW4ez8brkmxQ6'
  ],
  'pulau-peucang': [
    'https://images.app.goo.gl/2YtKZk3Evd5JEhTj9',
    'https://images.app.goo.gl/H1jabZBQCfiwwtMQ8',
    'https://images.app.goo.gl/PxT7ArBM6TthETkH7'
  ],
  'dieng': [
    'https://images.app.goo.gl/eKLmUPRB1J1GDDpv6',
    'https://images.app.goo.gl/g2ZU3bGx2pfTRM1t6',
    'https://images.app.goo.gl/dQZzWVumJVnR38NW7'
  ],
  'pulau-sebesi': [
    'https://images.app.goo.gl/QHPzqEjGWZdimhay8',
    'https://images.app.goo.gl/axNsKm7RZBpXseAB8',
    'https://images.app.goo.gl/8L1CLEj8WFexrNX9A'
  ],
  'pulau-pahawang': [
    'https://images.app.goo.gl/mauMbhgradvNMzBY6',
    'https://images.app.goo.gl/FEB6CUySTfq5EwYt7',
    'https://images.app.goo.gl/DLN83NVmifEobtPw5'
  ]
};

// Get main image for destination cards and previews
export const getMainDestinationImage = (destinationId: string): string => {
  const images = destinationImages[destinationId as keyof typeof destinationImages];
  return images ? images[0] : '/placeholder.svg';
};

// Get all images for destination gallery
export const getDestinationImages = (destinationId: string): string[] => {
  const images = destinationImages[destinationId as keyof typeof destinationImages];
  return images || ['/placeholder.svg'];
};

// Fallback function for categories
export const getCategoryPlaceholderImage = (category: string): string => {
  const categoryImages = {
    'Pantai': 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Pegunungan': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Alam': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Budaya': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  };
  return categoryImages[category as keyof typeof categoryImages] || '/placeholder.svg';
};
