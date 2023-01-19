import {button} from "../button/button";
import './headline.scss';

export const headline = `
<section class="headline">
    <div class="headline__one">
        <div class="headline__text">
            <h1 class="headline__heading">Hire in LatAm to Drive Growth & Cut Costs</h1>
            <p class="headline__paragraph">
                We help fast-growing US companies struggling to hire top developers overseas, 
                find, validate and recruit A-class candidates from Latin America.
            </p>
            ${button({
                href: "https://www.linkedin.com/in/cesarkohl",
                label: "Hire Talent"
            })}
        </div>
        <img class="headline__img" src="/globe.svg" alt="Globe">
    </div>
    
    <div class="headline__two">
        <div class="headline__partnership">
            <p class="headline__partnership-paragraph">In Partnership With:</p>
            <div class="headline__partnership-logos">
                <img src="/deel.svg" class="headline__partnership-logo" alt="deel logo"/>
                <img src="/oyster.svg" class="headline__partnership-logo" alt="Oyster logo"/>
                <img src="/firstbase.png" class="headline__partnership-logo" alt="firstbase logo"/>
                <img src="/ontop.svg" class="headline__partnership-logo" alt="Ontop logo"/>
                <img src="/lano.svg" class="headline__partnership-logo" alt="lano logo"/>
                <img src="/trueup.svg" class="headline__partnership-logo" alt="TrueUp logo"/>
            </div>
        </div>
        
        <div class="headline__numbers">
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">20+ hours</h2>
                <span class="headline__numbers-span">time saved<br>per hire</span>
            </div>
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">$50k USD</h2>
                <span class="headline__numbers-span">you save,<br>per hire</span>
            </div>
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">100%</h2>
                <span class="headline__numbers-span">refund, no questions<br>asked</span>
            </div>
        </div>
    </div>
</section>
`;