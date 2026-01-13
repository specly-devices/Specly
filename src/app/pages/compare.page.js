import { getCompareDevices, removeFromCompare } from '../state/compare.state.js';
import { getDeviceById } from '../services/device.service.js';
import { Header } from '../../ui/components/Header.js';
import { COMPARE_SPECS } from '../config/compareSpecs.config.js';
import { getValueByPath } from '../utils/object.utils.js';

export async function initComparePage() {
  const app = document.getElementById('app');

  const compareIds = getCompareDevices();

  if (compareIds.length === 0) {
    app.innerHTML = `
  ${Header()}
  <h1>Compare Devices</h1>

  <div class="empty-state">
  <p>No devices added to compare.</p>
</div>

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
  ${Header()}
  <h1>Compare Devices</h1>
 <table>
  <tr>
    <th>Feature</th>
    ${devices.map(d => `<th>${d.name}</th>`).join('')}
  </tr>

  <tr>
    <td>Price</td>
    ${devices.map(d => `<td>$${d.pricing.launch_price}</td>`).join('')}
  </tr>

  ${renderSpecRows(devices)}

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
function renderSpecRows(devices) {
  const categoriesInCompare = new Set(devices.map(d => d.category));

  return COMPARE_SPECS
    .filter(spec =>
      spec.categories.some(cat => categoriesInCompare.has(cat))
    )
    .map(spec => {
      return `
        <tr>
          <td>${spec.label}</td>
          ${devices
            .map(device => {
              const value = getValueByPath(device, spec.path);
              if (value === null) return `<td>-</td>`;
              return `<td>${value}${spec.unit ? ' ' + spec.unit : ''}</td>`;
            })
            .join('')}
        </tr>
      `;
    })
    .join('');
}
