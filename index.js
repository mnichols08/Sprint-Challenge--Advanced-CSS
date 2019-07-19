// let hue = true;
// if (hue === true){
//     document.body.style="animation: rotate-hue 9s";
// }
// window.addEventListener("scroll",function(){

//     if(window.scrollY == 0) {
//         hue = true;
//     } else {
//         hue = false;
//     }
//     if (hue === true){
//         document.body.style="animation: rotate-hue 9s";
//     }

// })
let container = document.querySelector('.container.home');
let home = container.innerHTML;
let links = document.querySelectorAll('nav ul li a');


links[1].addEventListener("click", function() {
    window.scrollTo(0, 0);
    let style = document.createElement('style');
    style.innerHTML = 'header.container img {display: none}';
    document.head.append(style);
    document.querySelector('.container.home').innerHTML =
        `<div style="animation: blurIn 2.5s" class="about">
        <img class=""" src="img/nebula.jpg" alt="Header Image of a nebula">
        <div class="flex flex-column flex-w-100">
            <h2>Space Travel</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis asperiores neque labore officia optio nihil ea molestiae ab, quidem veritatis, magnam iste totam quaerat tempora consequuntur commodi? Unde, voluptate incidunt.
            </p>
        </div>
        <hr>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Mars Adventure</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Third Rock From the Sun</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>The X-Files</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>To Infinite and Beyond</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>To boldy go where no man has gone before</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eaque asperiores nulla
                    maiores. Cumque provident quibusdam esse, omnis corrupti magnam sed, voluptates quis aut est
                    velit eum reprehenderit magni unde.</p>
                <button>
                    Learn More
                </button>
            </div>
            <div class="flex-w-50 u-margin-1 u-padding-1 u-border-1 bg-grey">
                <h2>Burning Atmosphere</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit adipisci soluta? A maxime
                    odio, perferendis dolorem eos architecto iusto culpa quo magni, incidunt unde, sed nostrum
                    quibusdam provident ad.</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
        <hr>
        <div class="flex">
            <div class="flex-w-50 u-margin-1 u-padding-1">
                <h3>Some facts about Space Travel</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi soluta doloremque quam
                    voluptatibus ab est iusto placeat sequi quis rerum aut ipsa et, aspernatur nisi, molestiae
                    maiores fuga maxime officiis.</p>
                <ul>
                    <li>Mission to Mars in 2030</li>
                    <li>You can volunteer as a pioneer</li>
                    <li>That means you get to travel there for free!</li>
                    <li>The catch is: You cannot come back :@</li>
                </ul>
            </div>
            <div class="flex-w-50 flex-justify-center flex-content-center flex-items-center">
                <img src="img/wow.jpg" alt="A clockwork nebula" class="flex-w-100">
            </div>
    </div>
    `;
    


});
document.querySelectorAll('nav ul li a')[0].addEventListener("click", function () {
    window.scrollTo(0, 0);
    document.querySelector('.container.home').innerHTML = home;
});
