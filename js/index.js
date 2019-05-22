// Your code goes here
//https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event
// function logSelection(event) {
//     const log = document.querySelector('.logo-heading');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }

// const input = document.querySelector('input');
// input.addEventListener('select', logSelection);


//---------------STRETCH
//animation on main image
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', function (eventObject) {
    console.log(`workBtn fired!`);
    TweenMax.to(".intro img", 1, { x: 100, ease: Bounce.easeOut });
});

//------------MVP
//1) Mouseover P "Let's Go": NOT WORKING (https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event)

let mouseOverP = document.querySelectorAll('.text-content p');
console.log(mouseOverP)
mouseOverP.forEach(item => item.addEventListener('mouseover', (eventObject) => {
    console.log("working");
    eventObject.target.style.color = "orange";
}));


//2) Button manipulation: (https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
const button = document.querySelector('.btn');
console.log(button);
button.addEventListener('click', event => {
    console.log("item")
    button.innerHTML = `Click count: ${event.detail}`;
});

//3) Keydown- press any key for changes
// (https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event)

const test= document.querySelector("body")
console.log(test);

test.addEventListener("keydown", () => {
    console.log("test");
    test.style.background = "pink";
});

//4) RGP background change as mouse moves
const body = document.querySelector('body')
body.addEventListener('mousemove', e => {
    body.style.color = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 40)';
});

//5) PreventDefault: Nav bar prevented from working, prompt added 
const navLink = document.querySelectorAll('a');
console.log(navLink);
navLink.forEach(item => item.addEventListener("click", function (event) {
    alert("Sorry, nav bar under construction!")
    event.preventDefault()
}));

//6) Mouse over- Change Nav color as mouse over
const navBar= document.querySelector('.nav')
console.log("nav")
navBar.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "pink";

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

//7) Blur image- blur

const boatImg = document.querySelector('.img-content img');
console.log("boat");
boatImg.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
    console.log("boat test")
});

boatImg.addEventListener('blur', (event) => {
    event.target.style.background ='red';
});

//8) prombt berfore print page appears
window.addEventListener('beforeprint', (event) => {
   alert('You are about to print this page!');
});

//9) // after printing the page
window.addEventListener('afterprint', (event) => {
    alert('Thank for pringting we hope you enjoy!');
});

//10) // Mouse Event (Hid Image to right on maouse over)
const aventureImg = document.querySelector('.img-content img');
aventureImg.addEventListener('mouseover', function (eventObject) {
    console.log(`it worked!`);
    TweenLite.to(".img-content", 1, { x: 400, ease: Elastic.easeInOut});
});


//11) Propagation
const workBtn = document.querySelectorAll('.btn');
console.log(workBtn);

workBtn.forEach( item => item.addEventListener('click', event => {
    console.log(`Work button fired a click event!`)
    event.stopPropagation();
}));

