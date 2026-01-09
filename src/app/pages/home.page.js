import { getAllDevices } from '../services/device.service.js';
import { renderDeviceList } from '../../ui/renderers/device.renderer.js';

export async function initHomePage() {
  const app = document.getElementById('app');

  const devices = await getAllDevices();

  app.innerHTML = `
    <h1>Available Devices</h1>
    <div id="device-list"></div>
  `;

  const listContainer = document.getElementById('device-list');
  renderDeviceList(devices, listContainer);
}
