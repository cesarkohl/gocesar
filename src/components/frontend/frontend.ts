import './frontend.scss';

export function frontend(): string {
    return `
        <section class="frontend">
            <div class="frontend-text">
                <h2>Front-end Skills</h2>
                <p>
                    We understand that recruitment of high-caliber developers in LatAm is a challenge for US companies,
                    so we cover everything from the sourcing process to background checks.
                </p>
            </div>
            <img class="frontend-img" src="/teammates.svg" alt="Teammates">
        </section>
    `;
}
