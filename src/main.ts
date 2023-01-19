import {menu, toggleActive as menuToggleActive} from './components/menu/menu';
import {features} from './components/features/features';
import {testimonials} from "./components/testimonials/testimonials";
import {contact} from "./components/contact/contact";
import {footer, goToTop as footerGoToTop} from './components/footer/footer';
import './main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
        ${menu}
        
        ${features({
            id: "about-me",
            title: "About Me",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/photo-cesar.png",
            imageBorder: true,
        })}
        
        ${testimonials}

        ${features({
            id: "frontend",
            title: "Front-end",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            reverse: true,
            tags: [
                {label: "No Irrelevant Candidates"},
                {label: "Deeply-Vetted Developers"},
                {label: "No Gig-oriented Freelancers"},
                {label: "Engaged and Motivated Teammates"},
            ],
        })}
        
        ${features({
            id: "backend",
            title: "Back-end",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/globe-map.svg",
            list: [
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
            ],
        })}
        
        ${features({
            id: "devops",
            title: "DevOps",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            reverse: true,
            tags: [
                {label: "No Irrelevant Candidates"},
                {label: "Deeply-Vetted Developers"},
                {label: "No Gig-oriented Freelancers"},
                {label: "Engaged and Motivated Teammates"},
            ],
        })}
                
        ${features({
            id: "infosec",
            title: "Infosec",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/globe-map.svg",
            list: [
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
            ],
        })}
        
        ${contact}
        
        ${footer}
    </main>
`;

menuToggleActive();
footerGoToTop();
