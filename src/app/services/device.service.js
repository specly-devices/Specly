import { fetchJson } from '../../shared/api/http.client.js';

const DATA_PATH = './data/devices.json';

export async function getAllDevices() {
  return fetchJson(DATA_PATH);
}
export async function getDeviceById(id) {
  const devices = await getAllDevices();
  return devices.find(device => device.id === id);
}
