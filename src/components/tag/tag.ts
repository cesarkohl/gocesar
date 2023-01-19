import './tag.scss';

export function tag(text: string, color: boolean = true): string {
    return `
        <span class="tag ${color ? "tag--primary" : ''}">
            ${text}
        </span>
    `;
}
