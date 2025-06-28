
// Utility functions for handling different image sources

export const convertGoogleDriveLink = (shareUrl: string): string => {
  // Convert Google Drive share link to direct link
  // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // To: https://drive.google.com/uc?export=view&id=FILE_ID
  
  const match = shareUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  if (match) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }
  
  // If already in direct format or other format, return as is
  return shareUrl;
};

export const validateImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok && response.headers.get('content-type')?.startsWith('image/');
  } catch {
    return false;
  }
};

// Specific images for each destination from Google Drive
export const destinationImages: { [key: string]: string[] } = {
  '10': [ // Pulau Sebesi
    'https://drive.google.com/uc?export=view&id=11ZyMCu7TnJnjNB60nlLZAUrzn0xFvJ2D', // Main image
    'https://drive.google.com/uc?export=view&id=1ibjQDBFQiH7rz6LR37sTSAkBjL9eLDJh',
    'https://drive.google.com/uc?export=view&id=1e6qmsPe4XQvLney2QHJKgCy-_oGEBTWF'
  ]
};

export const getDestinationImages = (destinationId: string): string[] => {
  return destinationImages[destinationId] || getPlaceholderImages('default');
};

export const getMainDestinationImage = (destinationId: string): string => {
  const images = getDestinationImages(destinationId);
  return images[0]; // Return the first image as main image
};

export const getPlaceholderImages = (category: string): string[] => {
  const placeholders = {
    'Pantai': [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format'
    ],
    'Pegunungan': [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1464822759844-d150baef493e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format'
    ],
    'Budaya': [
      'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=600&fit=crop&auto=format'
    ],
    default: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop&auto=format'
    ]
  };
  
  return placeholders[category as keyof typeof placeholders] || placeholders.default;
};
