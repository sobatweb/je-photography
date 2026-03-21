
export const galleryData = { 
  Food: Array.from({ length: 15 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/food/food${i + 1}.png` 
  })),
  
  Event: Array.from({ length: 15 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/event/event${i + 1}.png` 
  })),
  
  Otomotif: Array.from({ length: 15 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/otomotif/auto${i + 1}.png` 
  })),
  
  Pet: Array.from({ length: 15 }, (_, i) => ({ 
    id: i + 1, 
    url: `/images/pet/pet${i + 1}.png` 
  })),
};