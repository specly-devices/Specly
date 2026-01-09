import { getCompareDevices, removeFromCompare } from '../state/compare.state.js';
import { getDeviceById } from '../services/device.service.js';

export async function initComparePage() {
  const app = document.getElementById('app');

  const compareIds = getCompareDevices();

  if (compareIds.length === 0) {
    app.innerHTML = `
      <h1>Compare Devices</h1>
      <p>No devices added to compare.</p>
      <a href="./listing.html">Go to Listing</a>
    `;
    return;
  }

  const devices = [];

  for (const id of compareIds) {
    const device = await getDeviceById(id);
    if (device) devices.push(device);
  }

  renderCompareTable(devices, app);
}

function renderCompareTable(devices, container) {
  container.innerHTML = `
    <h1>Compare Devices</h1>
    <table border="1" cellpadding="8">
      <tr>
        <th>Feature</th>
        ${devices.map(d => `<th>${d.name}</th>`).join('')}
      </tr>
      <tr>
        <td>Brand</td>
        ${devices.map(d => `<td>${d.brand}</td>`).join('')}
      </tr>
      <tr>
        <td>Price</td>
        ${devices.map(d => `<td>$${d.price}</td>`).join('')}
      </tr>
      <tr>
        <td>Action</td>
        ${devices.map(d =>
          `<td><button data-id="${d.id}">Remove</button></td>`
        ).join('')}
      </tr>
    </table>

    <br />
    <a href="./listing.html">← Back to Listing</a>
  `;

  attachRemoveHandlers(container);
}

function attachRemoveHandlers(container) {
  const buttons = container.querySelectorAll('button[data-id]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      removeFromCompare(id);
      window.location.reload();
    });
  });
}
