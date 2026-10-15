export function mapUrl(query: string | undefined, fallbackName: string, fallbackAddress: string) {
  const q = (query && query.trim()) || [fallbackName, fallbackAddress].filter(Boolean).join(", ");
  if (!q) return null;
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
}
