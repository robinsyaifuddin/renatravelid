
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
    'https://www.goersapp.com/blog/wp-content/uploads/2025/02/Mengenal-Suku-Baduy-Cara-Berkunjung-dan-Aturannya.webp',
    'https://asset.kompas.com/crops/GGGdru8q1Q0XeKnfjGHCRL3lG5Q=/23x82:987x725/1200x800/data/photo/2018/02/18/1404978252.jpg',
    'https://inforadar.disway.id/upload/ff720afa34a549bd7d204d27b054e452.jpg'
  ],
  'pulau-harapan': [
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/12/16/d5f8d80b-aa9e-42f2-bac6-08da753ebee2-1734293591419-76ea11891a0a974fd1acb2ecd1374ed8.jpg',
    'https://wisatapulauharapan.com/wp-content/uploads/2018/08/water-sport-snorkling-pulau-harapan.jpeg',
    'https://visitpulauseribu.co.id/wp-content/uploads/2022/10/pulau-harapan-1.jpg'
  ],
  'pulau-tidung': [
    'https://visitpulauseribu.co.id/wp-content/uploads/2024/10/Spot-Wisata-Pulau-Tidung-Kepulauan-Seribu.jpeg',
    'https://dinowisata.com/wp-content/uploads/2020/03/Objek-Wisata-Jembatan-Cinta-Pulau-Tidung-@ayu.rtn12.jpg',
    'https://www.tourkepulauanseribu.com/assets/images/paket/pulau_tidung___tidung_island_-_kepulauan_seribu_7a9c1.jpg'
  ],
  'pulau-pramuka': [
    'https://www.brenggo-id.com/wp-content/uploads/2023/03/27.-5-Hal-Menarik-Untuk-Liburan-di-Pulau-Pramuka-Kepulauan-Seribu-1.jpg',
    'https://putrapulauseribu.com/wp-content/uploads/2021/11/pulau-air-jakarta.jpg',
    'https://tidunglagoon.com/wp-content/uploads/2024/07/shutterstock_1095696137_2.jpg'
  ],
  'ujung-genteng': [
    'https://static.promediateknologi.id/crop/0x265:1080x980/750x500/webp/photo/2022/12/11/3710596500.jpg',
    'https://cnc-magazine.oramiland.com/parenting/images/ujung-genteng_3RYxAFf.width-800.format-webp.webp',
    'https://img.okezone.com/content/2022/06/08/549/2607590-liburan-ke-ujung-genteng-jangan-lewatkan-5-poin-penting-ini-ya-YUXaQ4YlkS.JPG'
  ],
  'pulau-peucang': [
    'https://tebakkata.com/ujungkulon/upload/file_menu/2.jpg',
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/09/09/02bd01d8-8ed9-4d28-9f52-1bc421b898f1-1599653592828-fcbe2d8019c4a26234a4cbea0e6dbac8.jpg',
    'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/09/09/ac9a323b-c00a-4662-8ec7-7c8ddc00e212-1599653580734-44728e2d38a4c18f90eadc79d681ed7c.jpg'
  ],
  'dieng': [
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/961/2025/05/05/kurcilbersaudara-20250505-0001-948810530.jpg',
    'https://cityhyangdiengtour.com/wp-content/uploads/2016/06/tempat-wisata-dieng.jpg',
    'https://asset.kompas.com/crops/qO62aZmeVZf4U70Jn-A5E9L-_r8=/0x0:0x0/750x500/data/photo/2021/11/10/618b2344e2870.jpg'
  ],
  'pulau-sebesi': [
    'https://lampungnewspaper.disway.id/upload/254ef0a68c6e84e79ee2f8d191beb15d.jpg',
    'https://www.brenggo-id.com/wp-content/uploads/2022/06/open-trip-pulau-sebesi-lampung-brenggo-tour.jpg',
    'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/583/2024/01/13/Picsart_24-01-13_12-17-53-779-3211170143.jpg'
  ],
  'pulau-pahawang': [
    'https://awsimages.detik.net.id/community/media/visual/2023/05/11/pulau-pahawang-lampung_169.jpeg?w=1200',
    'https://wisatalampung.id/blog/wp-content/uploads/2022/08/3dd21e66-68c5-42ad-9b6d-aaa48710cd50-Copy.jpg',
    'https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/04/17/Potensi-Wisata-Pantai-Desa-Wisata-Pulau-Pahawang-Provinsi-Lampung-639487989.jpg'
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
