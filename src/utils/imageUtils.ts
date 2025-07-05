
// Destination image mappings with real URLs
const destinationImages = {
  'geopark-ciletuh': [
    'https://omnispace.blob.core.windows.net/strapi-prod/2023-03-30/14_Melihat_Keindahan_Geopark_Ciletuh_di_Sukabumi_ee2bc9e397.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJqMPTOc4xxHKu7KnIijfC9Zc8cDim-VOB_lHlYgUepvrECgX7J5mtWycFpnesHbv3MA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTDV1BXxYq5TSsNtjDp9NzsLgIe6_lJ4jZ_pYwzPyxZOHckttKA6o20cWmCny4CYsojM&usqp=CAU'
  ],
  'twa-papandayan': [
    'https://www.jelajahgarut.com/wp-content/uploads/2017/11/13392842_1620599381589304_918540633_n.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuzbNutwU45SVHSa-8PvzSW96E-wYaTfmcUJXeq8jQi_e_jadCBBqDMdP-9thbCt_hf6k&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyZ72JPZHqo3QA5YymjTNO95o7dkgE8uCOpymQxI_jFL3TZYWSYnTx5o0z2xALLXntBc&usqp=CAU'
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
