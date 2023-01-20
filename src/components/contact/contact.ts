import './contact.scss';
import {button} from "../button/button";

export const contact = `
    <div id="contact" class="contact">
        <h3 class="contact__heading">Cesar is eager to be part of<br/>the best tech team in the world</h3>
        <p class="contact__text">I want the chance to be part of something great, build relevant products, learn with the best and have friends all over the world.</p>
        ${button({
            href: "https://www.linkedin.com/in/cesarkohl",
            label: "Contact me on LinkedIn",
        })}
        <strong class="contact__link">
            <a href="https://www.github.com/cesarkohl/gocesar" target="_blank">
                Access the GitHub repository of this page! 😁
            </a>
        </strong>
    </div>
`;