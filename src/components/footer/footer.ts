import './footer.scss';

export const footer = `
    <footer class="footer">
        <span>© 2023</span>
        <a href="https://www.linkedin.com/in/cesarkohl/" target="_blank">
            <img src="./icon-linkedin.svg" alt="Linked In">
        </a>
        <a href="https://github.com/cesarkohl" target="_blank">
            <img src="./icon-github.svg" alt="GitHub">
        </a>
        <a href="https://twitter.com/cesar_kohl/" target="_blank">
            <img src="./icon-twitter.svg" alt="Twitter">
        </a>
        <a class="footer__go-top">
            Go top
            <img class="footer__arrow" src="./arrow-top.svg" alt="Teammates">
        </a>
    </footer>
`;

export function goToTop() {
    document.querySelector('.footer__go-top')?.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}