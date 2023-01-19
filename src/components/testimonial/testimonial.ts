import './testimonial.scss';

interface Testimonial {
    text: string;
    authorPhoto: string;
    authorName: string;
    authorRole: string;
    quotationMark?: boolean;
}

export function testimonial(props: Testimonial): string {
    return `
        <div class="testimonial">
            <p class="testimonial__text">${props.text}</p>
            <div class="author">
                <img class="testimonial__author-photo" src="${props.authorPhoto}" alt="">
                <span class="testimonial__author-name">${props.authorName}</span>
                <span class="testimonial__author-role">${props.authorRole}</span>
            </div>
            <img 
                class="testimonial__quotation-mark
                    ${props.quotationMark ? 'testimonial__quotation-mark--active' : ''}" 
                src="./icon-quotation-mark.svg" 
                alt="Quotation Mark"
            >
        </div>
    `;
}