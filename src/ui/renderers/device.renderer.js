import { DeviceCard } from '../components/DeviceCard.js';

export function renderDeviceList(devices, container) {
  container.innerHTML = devices.map(DeviceCard).join('');
}
