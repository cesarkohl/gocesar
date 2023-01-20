import {menu, toggleActive as menuToggleActive} from './components/menu/menu';
import { headline } from './components/headline/headline';
import {features} from './components/features/features';
import {testimonials} from "./components/testimonials/testimonials";
import {contact} from "./components/contact/contact";
import {footer, goToTop as footerGoToTop} from './components/footer/footer';
import './main.scss';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <main>
        ${menu}
        
        ${headline}
        
        ${features({
            id: "about-me",
            title: "About Me",
            text: "Since 2010 developing websites and systems applying <strong>clean code</strong>.<br/>" +
                "Since 2016 building on <strong>AWS</strong> including the <strong>Serverless</strong> architecture.<br/>️" +
                "Since 2019 focused on <strong>software architecture</strong>.<br/>" +
                "Since 2021 learning more about <strong>cybersecurity</strong> on the web.<br/>" +
                "My wife is also a software engineer so we talk about it quite a lot! 😃<br/>" +
                "Currently in Brazil. 🇧🇷",
            image: "/photo-cesar.png",
            imageBorder: true,
        })}
        
        ${testimonials}

        ${features({
            id: "frontend",
            title: "Front-end",
            text: "The language always wins over the framework. Frameworks come and go but understanding the depths of the language is key to keep competitive as an engineer and company you work for.",
            image: "/teammates.svg",
            reverse: true,
            tags: [
                {label: "JavaScript"},
                {label: "TypeScript"},
                {label: "React"},
                {label: "Vue"},
                {label: "Jest"},
                {label: "Cypress"},
                {label: "Next.js"},
                {label: "Vite"},
                {label: "Webpack"},
                {label: "jQuery"},
                {label: "ESLint"},
                {label: "Apollo GraphQL"},
            ],
            list: [
                "Sharing knowledge with humility",
                "Responsive UIs",
                "Teamwork among different squads",
            ],
        })}
        
        ${features({
            id: "backend",
            title: "Back-end",
            text: "Architecting a system is as important as understanding OOP, languages, and their frameworks. " +
                "Teamwork from different areas is key to achieve success.",
            image: "/globe-map.svg",
            tags: [
                {label: "TypeScript"},
                {label: "Node"},
                {label: "Express"},
                {label: "Python"},
                {label: "PHP"},
                {label: "WordPress"},
                {label: "Laravel"},
                {label: "C#"},
                {label: "MySQL"},
                {label: "MongoDB"},
                {label: "Sentry"},
                {label: "Bugsnag"},
                {label: "UML"},
            ],
            list: [
                "Design Patterns",
                "Driven Domain Design",
                "MVC / MTV",
                "Service-Oriented Architecture: RESTful APIs",
                "Secure systems",
                "Interest over different typing disciplines",
            ],
        })}
        
        ${features({
            id: "devops",
            title: "DevOps",
            text: "Developing for the cloud takes time but guarantees longevitity, stability and cost efficiency. " +
                "It's key to keep-up-date on a weekly basis to take advantage of the best tools.",
            image: "/teammates.svg",
            reverse: true,
            tags: [
                {label: "AWS"},
                {label: "Serverless"},
                {label: "CI/CD"},
                {label: "GitHub Actions"},
                {label: "Dependency Management"},
            ],
            list: [
                "<strong>Architecture:</strong> Well-Architected Framework, Lightsail.",
                "<strong>Infrastructure:</strong> CLI, CloudFormation, CloudShell.",
                "<strong>Computing:</strong> EC2, Elastic Beanstalk, ECS/Docker.",
                "<strong>Storage:</strong> S3, Athena, RDS, Aurora, DynamoDB, Timestream.",
                "<strong>Networking:</strong> Route 53, CloudFront, VPC.",
                "<strong>Security:</strong> IAM, Policies, KMS.",
                "<strong>Monitoring:</strong> CloudWatch, CloudTrail.",
                "<strong>Migration:</strong> DMS.",
                "<strong>Serverless:</strong> Serverless.com, SAM, SNS, SQS, Lambda, API Gateway, AppSync, EventBridge, Step Functions.",
            ],
        })}
                
        ${features({
            id: "infosec",
            title: "Infosec",
            text: "With an increasing scenario where multiple attacks might happen to a system and " +
                "the settled positioning of a web with several open doors to threats, keeping assets " +
                "secure is key to any company.",
            image: "/globe-map.svg",
            tags: [
                {label: "OWASP"},
                {label: "ASVS"},
                {label: "WSTG"},
                {label: "ZAP"},
            ],
            list: [
                "SDLC: Secure Development Lifecycle (WIP)",
                "Pentesting (WIP)",
            ],
        })}
        
        ${contact}
        
        ${footer}
    </main>
`;

menuToggleActive();
footerGoToTop();
