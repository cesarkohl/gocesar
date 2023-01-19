import './main.scss'
import { menu } from './components/menu/menu';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    ${menu}
  </main>
`
