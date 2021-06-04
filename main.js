//remove top bar
const removeBar = document.getElementById('removeBar');
const topPannel = document.querySelector('.top-pannel');

removeBar.addEventListener('click', () => {
    topPannel.classList.toggle('dissapear')
})

//mobile menu
const menuIcon = document.querySelector('#menuIcon');
const menuBcg = document.querySelector('.menuBcg');
const navUl = document.querySelector('nav').querySelector('ul');
const navA = document.querySelector('nav').querySelectorAll('a');

menuIcon.addEventListener('click', function () {
    menuBcg.classList.toggle('menuBcgOpen');
    navUl.classList.toggle('openedUl');
    topPannel.classList.toggle('top-pannel-menu');
    menuIcon.classList.toggle('menuIconOpened');
})

navA.forEach(x=>{
    x.addEventListener('click', () => {
    menuIcon.click()
})
})
//slider

const slider = document.getElementById("slider");
const outputRange = document.getElementById("outputRange");
const rangeNumber = document.getElementById('rangeNumber');

outputRange.innerHTML = slider.value * 200;


rangeNumber.oninput = function () {
    if (this.value > 60) this.value = 60;
    else if (this.value < 1) this.value = 1;
    outputRange.innerHTML = this.value * 200;
    slider.value = this.value;
}

slider.oninput = function () {
    outputRange.innerHTML = this.value * 200;
    rangeNumber.value = this.value;
}


const question = document.querySelectorAll('.question');
question.forEach(x => {
    x.addEventListener('click', () => {
        question.forEach(y => {
            if (y != x) {
                y.children[1].classList.remove('openedQuestion')
                y.children[0].children[0].classList.remove('openIcon')
            }
        })
        x.children[1].classList.toggle('openedQuestion')
        x.children[0].children[0].classList.toggle('openIcon')
    })
})

//intersectional observer

let whyWe = document.querySelectorAll(".whyWeGrid >div");
let section = document.querySelectorAll("section");

const config = {
    root: null,
    rootMargin: "-20px 0px",
    threshold: 0.5
}

let observer = new IntersectionObserver((entries, observer) => {
    let x = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("whyWeAppear");
            }, x += 200);
            observer.unobserve(entry.target)
        }
    });
}, config)


whyWe.forEach(e => observer.observe(e));
