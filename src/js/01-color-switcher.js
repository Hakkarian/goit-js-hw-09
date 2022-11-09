//we're declaring a start, stop button and a body
const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
    }

//we're instanciating a function with calling a random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// we're creating a variable, which will contain frequency, with which body will change its color;
let color;
//we're creating a start function, in which...
const onStart = () => {
    //we're setting an interval, in which...
    color = setInterval(() => {
        //...we're placing inside of the body random color from from the function of the same name
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000) // <--- ...and placing frequency
    //...when clicked, start button must be disabled
    refs.start.setAttribute('disabled', true);
}
//we're creating a stop function, in which...
const onStop = () => {
    //...start button will be enabled
    refs.start.disabled = false;
    //...and stopping our interval, in result - the color of the body will remain after 1 second
    clearInterval(color);
}

//the most important - when clicking on start button, plays function onStart...
refs.start.addEventListener('click', onStart);
//when clicking on stop button, function onStop.
refs.stop.addEventListener('click', onStop);