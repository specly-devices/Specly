const STORAGE_KEY = 'specly_compare_devices';
const MAX_COMPARE = 3;

export function getCompareDevices() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addToCompare(deviceId) {
  const devices = getCompareDevices();

  if (devices.includes(deviceId)) {
    return { success: false, message: 'Device already added' };
  }

  if (devices.length >= MAX_COMPARE) {
    return { success: false, message: 'You can compare up to 3 devices only' };
  }

  devices.push(deviceId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));

  return { success: true };
}

export function removeFromCompare(deviceId) {
  const devices = getCompareDevices().filter(id => id !== deviceId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
}

export function clearCompare() {
  localStorage.removeItem(STORAGE_KEY);
}
export function setCompareDevices(ids) {
  localStorage.setItem('compareDevices', JSON.stringify(ids));
}

