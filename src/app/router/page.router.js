import { initHomePage } from '../pages/home.page.js';
import { initListingPage } from '../pages/listing.page.js';
import { initDevicePage } from '../pages/device.page.js';
import { initComparePage } from '../pages/compare.page.js';

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop();

  return file || 'index.html';
}

function route() {
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
      console.warn('No route matched:', page);
  }
}

route();
