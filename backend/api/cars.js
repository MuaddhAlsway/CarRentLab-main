export async function getCars(filters = {}) {
  const params = new URLSearchParams();

  if (filters.type) params.append("type", filters.type);
  if (filters.brand) params.append("brand", filters.brand);
  if (filters.min) params.append("min", filters.min);
  if (filters.max) params.append("max", filters.max);

  const response = await fetch(
    `http://localhost:5000/cars?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  const json = await response.json();

  return json.data;
}