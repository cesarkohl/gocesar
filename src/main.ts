import { menu } from './components/menu/menu';
import { frontend } from './components/frontend/frontend';
import './main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    ${menu}
    ${frontend()}
  </main>
`;
