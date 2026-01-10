import { getCompareDevices } from '../../app/state/compare.state.js';

export function Header() {
  const compareCount = getCompareDevices().length;

  return `
    <header class="app-header">
      <h2 class="logo">Specly</h2>

      <nav>
        <a href="./index.html">Home</a>
        <a href="./listing.html">Devices</a>
        <a href="./compare.html">
          Compare ${compareCount > 0 ? `(${compareCount})` : ''}
        </a>
      </nav>
    </header>
  `;
}
