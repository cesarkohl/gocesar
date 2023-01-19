import './features.scss';
import { tag } from "../tag/tag";

interface Props {
    title: string;
    text: string;
    image: string;
    reverse?: boolean;
    tags?: {
        label: string;
        color?: boolean;
    }[];
    list?: string[],
}

export function features(props: Props): string {
    return `
        <section class="features ${props.reverse ? 'features--reverse' : ''}">
            <div class="features__text">
                <h2>${props.title}</h2>
                <p>${props.text}</p>
                <div class="features__tags">
                    ${props.tags?.length ? props.tags.map(t => tag(t.label, t.color)).join('') : ''}
                </div>
                <ul class="features__list">
                    ${props.list?.length ? props.list.map(li => `<li>${li}</li>`).join('') : ''}
                </ul>
            </div>
            <img class="features__img" src="${props.image}" alt="Teammates">
        </section>
    `;
}
