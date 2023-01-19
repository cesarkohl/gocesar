import './button.scss';

interface Button {
    href: string;
    label: string;
}

export function button(props: Button): string {
    return `
        <a 
            class="button" 
            href="${props.href}" 
            target="_blank"
        >
            ${props.label}
        </a>
    `;
}