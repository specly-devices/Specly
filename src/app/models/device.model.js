export function normalizeDevice(raw) {
  return {
    id: raw.id,
    name: raw.name,
    brand: raw.brand,
    category: raw.category || "smartphone",

    pricing: {
      launch_price:
        raw.pricing?.launch_price ??
        raw.price ??
        null,
      currency: raw.pricing?.currency || "USD"
    },

    specs: {
      processor: raw.specs?.processor ?? null,
      ram_gb: raw.specs?.ram_gb ?? null,
      storage_gb: raw.specs?.storage_gb ?? null,

      display: raw.specs?.display ?? null,

      os: raw.specs?.os ?? null,

      // Smartphone
      battery_mah: raw.specs?.battery_mah ?? null,
      camera: raw.specs?.camera ?? null,

      // Laptop
      battery_wh: raw.specs?.battery_wh ?? null,
      weight_kg: raw.specs?.weight_kg ?? null,
      ports: raw.specs?.ports ?? []
    },

    meta: raw.meta || {}
  };
}
