import { fetchJson } from '../../shared/api/http.client.js';
import { normalizeDevice } from '../models/device.model.js';

const DATA_PATH = './data/devices.json';

export async function getAllDevices() {
  const rawDevices = await fetchJson(DATA_PATH);
  return rawDevices.map(normalizeDevice);
}

export async function getDeviceById(id) {
  const devices = await getAllDevices();
  return devices.find(d => d.id === id);
}
