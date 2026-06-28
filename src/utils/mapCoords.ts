// src/utils/mapCoords.ts
// Maps Province/Vicinity to Map Centroids
export const getCoords = (provinceCode: string) => {
  const centroids: Record<string, {x: number, y: number}> = {
    'WC': { x: 150, y: 550 },
    'EC': { x: 450, y: 500 },
    'NC': { x: 200, y: 300 },
    'FS': { x: 400, y: 350 },
    'KZN': { x: 550, y: 350 },
    'LIM': { x: 450, y: 100 },
    'MP': { x: 500, y: 150 },
    'NW': { x: 300, y: 200 },
    'GT': { x: 450, y: 180 }
  };
  return centroids[provinceCode] || { x: 0, y: 0 };
};
