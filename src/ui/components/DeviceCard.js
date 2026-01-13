export function DeviceCard(device) {
  return `
    <a href="./device.html?id=${device.id}" class="device-card">
      <h3>${device.name}</h3>
      <p>Brand: ${device.brand}</p>
      <p>Price: $${device.pricing.launch_price}</p>
    </a>
  `;
}
