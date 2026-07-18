export function generatePlantSchema(data, lastUpdated) {
  if (!data) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Plant",
    "name": data.name,
    "alternateName": data.scientific_name,
    "scientificName": data.scientific_name,
    "family": data.family,
  };

  if (data.native_region) {
    schema.nativeTo = data.native_region;
  }

  if (data.description) {
    schema.description = data.description;
  }

  if (data.introduction) {
    schema.disambiguatingDescription = data.introduction;
  }

  if (data.conservation_status) {
    schema.additionalProperty = {
      "@type": "PropertyValue",
      "name": "Conservation Status",
      "value": data.conservation_status,
    };
  }

  if (data.image) {
    schema.image = `https://southafricanbotanical.org.za${data.image}`;
  }

  if (lastUpdated) {
    schema.dateModified = lastUpdated;
  }

  return schema;
}
