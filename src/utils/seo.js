export function generatePlantSchema(data) {
  return {
    "@context": "https://schema.org",
    "@type": "Plant",
    "name": data.name,
    "scientificName": data.scientific_name,
    "family": data.family
  };
}
