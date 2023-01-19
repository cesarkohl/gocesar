import {menu} from './components/menu/menu';
import {features} from './components/features/features';
import './main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
        ${menu}
        
        ${features({
            title: "Front-end Skills",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            tags: [
                {label: "No Irrelevant Candidates"},
                {label: "Deeply-Vetted Developers"},
                {label: "No Gig-oriented Freelancers"},
                {label: "Engaged and Motivated Teammates"},
            ],
        })}
        
        ${features({
            title: "Back-end Skills",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            reverse: true,
            list: [
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
            ],
        })}
        
        ${features({
            title: "DevOps",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            tags: [
                {label: "No Irrelevant Candidates"},
                {label: "Deeply-Vetted Developers"},
                {label: "No Gig-oriented Freelancers"},
                {label: "Engaged and Motivated Teammates"},
            ],
        })}
                
        ${features({
            title: "Infosec",
            text: "We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies, so we cover everything from the sourcing process to background checks.",
            image: "/teammates.svg",
            reverse: true,
            list: [
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
                "NEVER send a candidate before validating their <b>tech, communication, and culture</b>",
            ],
        })}
    </main>
`;
