export function DeviceCard(device) {
  return `
    <div class="device-card">
      <h3>${device.name}</h3>
      <p>Brand: ${device.brand}</p>
      <p>Price: $${device.price}</p>
    </div>
  `;
}
