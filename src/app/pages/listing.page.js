import { getAllDevices } from '../services/device.service.js';
import { renderDeviceList } from '../../ui/renderers/device.renderer.js';

export async function initListingPage() {
  const app = document.getElementById('app');

  app.innerHTML = `
  <a href="./index.html">← Back to Home</a>
    <h1>All Devices</h1>
    <div id="device-list"></div>
  `;

  try {
    const devices = await getAllDevices();
    const listContainer = document.getElementById('device-list');
    renderDeviceList(devices, listContainer);
  } catch (error) {
    app.innerHTML = '<p>Failed to load devices</p>';
    console.error(error);
  }
}
