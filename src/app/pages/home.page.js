import { getAllDevices } from '../services/device.service.js';

export async function initHomePage() {
  const app = document.getElementById('app');

  try {
    const devices = await getAllDevices();
    app.innerHTML = `
      <h1>Home Page</h1>
      <p>Total devices available: <strong>${devices.length}</strong></p>
    `;
  } catch (error) {
    app.innerHTML = `<p>Error loading devices</p>`;
    console.error(error);
  }
}
