import './contact.scss';
import {button} from "../button/button";

export const contact = `
    <div id="contact" class="contact">
        <h3 class="contact__heading">Cesar is your access to the best development in your company</h3>
        <p class="contact__text">I help tech companies discover the LatAm talent market with complete confidence.</p>
        <strong class="contact__address">São Paulo, Brazil</strong>
        ${button({
            href: "https://www.linkedin.com/in/cesarkohl",
            label: "Contact me on LinkedIn",
        })}
    </div>
`;