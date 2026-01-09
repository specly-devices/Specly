import { getAllDevices } from '../services/device.service.js';
import { renderDeviceList } from '../../ui/renderers/device.renderer.js';

export async function initHomePage() {
  const app = document.getElementById('app');

  const devices = await getAllDevices();

  app.innerHTML = `
    <h1>Home</h1>

    <a href="./listing.html">Go to All Devices</a>

    <div id="device-list"></div>
  `;

  renderDeviceList(devices, document.getElementById('device-list'));
}
