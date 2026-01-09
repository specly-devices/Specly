import { fetchJson } from '../../shared/api/http.client.js';

const DATA_PATH = './data/devices.json';

export async function getAllDevices() {
  return fetchJson(DATA_PATH);
}
