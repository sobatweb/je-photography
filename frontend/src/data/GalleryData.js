
export const galleryData = { 
  Food: Array.from({ length: 20 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/food/food${i + 1}.webp` 
  })),
  
  Event: Array.from({ length: 20 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/event/event${i + 1}.webp` 
  })),
  
  Automotive: Array.from({ length: 20 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/otomotif/auto${i + 1}.webp` 
  })),
  
  Pet: Array.from({ length: 20 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/pet/pet${i + 1}.webp` 
  })),
};