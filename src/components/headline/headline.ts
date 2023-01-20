import {button} from "../button/button";
import './headline.scss';

export const headline = `
<section class="headline">
    <div class="headline__one">
        <div class="headline__text">
            <h1 class="headline__heading">Hire Cesar to Drive Growth & Increase Quality</h1>
            <p class="headline__paragraph">
                I can help your team win big time
                because in the end success is about teamwork,
                keep moving forward, and never giving up.
            </p>
            ${button({
                href: "https://www.linkedin.com/in/cesarkohl",
                label: "Hire Me"
            })}
        </div>
        <img class="headline__img" src="/globe.svg" alt="Globe">
    </div>
    
    <div class="headline__two">
        <div class="headline__partnership">
            <p class="headline__partnership-paragraph">In Partnership With:</p>
            <div class="headline__partnership-logos">
                <img src="/logo.png" class="headline__partnership-logo" alt="deel logo" style="width: 100px;"/>
                <img src="/icon-js.png" class="headline__partnership-logo" alt="" style="width: 50px;"/>
                <img src="/icon-ts.png" class="headline__partnership-logo" alt="" style="width: 50px;"/>
                <img src="/icon-vue.png" class="headline__partnership-logo" alt="" style="width: 50px;"/>
                <img src="/icon-react.png" class="headline__partnership-logo" alt="" style="width: 50px;"/>
                <img src="/icon-python.png" class="headline__partnership-logo" alt="" style="width: 50px;"/>
                <img src="/icon-php.png" class="headline__partnership-logo" alt="" style="width: 100px;"/>
                <img src="/icon-laravel.png" class="headline__partnership-logo" alt="" style="width: 60px;"/>
                <img src="/icon-csharp.png" class="headline__partnership-logo" alt="" style="width: 60px;"/>
                <img src="/icon-aws.png" class="headline__partnership-logo" alt="" style="width: 70px;"/>
            </div>
        </div>
        
        <div class="headline__numbers">
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">10+ years</h2>
                <span class="headline__numbers-span">coding for startups</span>
            </div>
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">$50k USD</h2>
                <span class="headline__numbers-span">you save,<br/>hiring me</span>
            </div>
            <div class="headline__numbers-card">
                <h2 class="headline__numbers-title">100%</h2>
                <span class="headline__numbers-span">commitment,<br/>let's get it!</span>
            </div>
        </div>
    </div>
</section>
`;