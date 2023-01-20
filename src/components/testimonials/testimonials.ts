import { testimonial } from "../testimonial/testimonial";
import './testimonials.scss';

export const testimonials = `
    <section class="testimonials">
        <h2 class="testimonials__heading">Managers ❤️ Cesar</h2>
        <p class="testimonials__text">Check testimonials from managers who trust me.</p>
        
        <div class="testimonials__list">
            ${testimonial({
                text: "Cesar is a uniquely talented young individual. He is very up-to-date about modern business practices and productivity methods. Cesar has lots of energy and dedicates all of it to researching, learning and applying new perspectives to the company.",
                authorPhoto: "./photo-joao.jpg",
                authorName: "João del Valle",
                authorRole: "Co-Founder & CEO, EBANX",
            })}
            ${testimonial({
                text: "I firmly believe guys like Cesar are few and far between. He is a critical thinker, thoughtful developer and great communicator!",
                authorPhoto: "./photo-brian.jpg",
                authorName: "Brian Webb",
                authorRole: "Co-Founder & CTO, Voxie",
                quotationMark: true,
            })}
        </div>
    </section>
`