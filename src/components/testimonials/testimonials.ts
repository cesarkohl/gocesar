import { testimonial } from "../testimonial/testimonial";
import './testimonials.scss';

export const testimonials = `
    <section class="testimonials">
        <h2 class="testimonials__heading">Managers ❤️ Cesar</h2>
        <p class="testimonials__text">Check testimonials from managers who trust him</p>
        
        <div class="testimonials__list">
            ${testimonial({
                text: "GoGloby, has been a tremendous partner for us to scale our engineering org quickly. With GoGloby, we were able to hire several high-quality JS engineers in half of the time it took us to get to a final round offer with one candidate! I would absolutely recommend them for anyone looking to build a high-quality, global workforce.",
                authorPhoto: "./testimonial-1-photo.jpeg",
                authorName: "Max Klein",
                authorRole: "Co-Founder & CEO, OttoPay",
            })}
            ${testimonial({
                text: "GoGloby, has been a tremendous partner for us to scale our engineering org quickly. With GoGloby, we were able to hire several high-quality JS engineers in half of the time it took us to get to a final round offer with one candidate! I would absolutely recommend them for anyone looking to build a high-quality, global workforce.",
                authorPhoto: "./testimonial-1-photo.jpeg",
                authorName: "Max Klein",
                authorRole: "Co-Founder & CEO, OttoPay",
                quotationMark: true,
            })}
        </div>
    </section>
`