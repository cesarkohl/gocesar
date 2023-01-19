import './menu.scss';

export const menu = `
<div class="menu">
    <a class="menu__logo">
        <span>GoCesar</span>
        <img src="/logo.png" class="logo" alt="GoGloby logo" />
    </a>
    <a class="menu__option menu__option--active" href="#about-me">About me</a>
    <a class="menu__option" href="#frontend">Front-end</a>
    <a class="menu__option" href="#backend">Back-end</a>
    <a class="menu__option" href="#devops">DevOps</a>
    <a class="menu__option" href="#infosec">InfoSec</a>
    <a class="menu__option" href="#contact">Contact</a>
</div>
`;

export function toggleActive() {
    document.querySelectorAll('.menu__option')?.forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.menu__option')?.forEach(
                o => o.classList.remove('menu__option--active')
            );
            option.classList.add('menu__option--active');
        })
    })
}