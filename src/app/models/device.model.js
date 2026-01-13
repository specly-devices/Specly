export function normalizeDevice(raw) {
  return {
    id: raw.id,
    name: raw.name,
    brand: raw.brand,
    category: raw.category || "smartphone",

    pricing: {
      launch_price: raw.price ?? raw.pricing?.launch_price,
      currency: raw.currency || "USD"
    },

    specs: raw.specs || {},

    meta: raw.meta || {}
  };
}
