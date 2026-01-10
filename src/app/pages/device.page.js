import { getDeviceById } from '../services/device.service.js';
import { addToCompare } from '../state/compare.state.js';
import { Header } from '../../ui/components/Header.js';

export async function initDevicePage() {
  const app = document.getElementById('app');

  // 1. Read device ID from URL
  const params = new URLSearchParams(window.location.search);
  const deviceId = params.get('id');

  if (!deviceId) {
    app.innerHTML = '<p>Device not found</p>';
    return;
  }

  // 2. Fetch device using service
  const device = await getDeviceById(deviceId);

  if (!device) {
    app.innerHTML = '<p>Device not found</p>';
    return;
  }

  // 3. Render device details
app.innerHTML = `
  ${Header()}
  <a href="./listing.html">← Back to Listing</a>

  <h1>${device.name}</h1>
  <p><strong>Brand:</strong> ${device.brand}</p>
  <p><strong>Price:</strong> $${device.price}</p>

  <button id="addToCompareBtn">Add to Compare</button>
  <p id="compareMessage"></p>
`;

const button = document.getElementById('addToCompareBtn');
const message = document.getElementById('compareMessage');

button.addEventListener('click', () => {
  const result = addToCompare(device.id);

  if (!result.success) {
    message.textContent = result.message;
    return;
  }

  // Redirect to compare page after successful add
  window.location.href = './compare.html';
});
}
