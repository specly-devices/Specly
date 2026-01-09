import { initHomePage } from '../pages/home.page.js';
import { initListingPage } from '../pages/listing.page.js';
import { initDevicePage } from '../pages/device.page.js';
import { initComparePage } from '../pages/compare.page.js';

function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

const page = getCurrentPage();

switch (page) {
  case 'index.html':
    initHomePage();
    break;
  case 'listing.html':
    initListingPage();
    break;
  case 'device.html':
    initDevicePage();
    break;
  case 'compare.html':
    initComparePage();
    break;
  default:
    document.getElementById('app').innerHTML = '<h1>Page not found</h1>';
}
