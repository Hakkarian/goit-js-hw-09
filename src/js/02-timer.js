//flatpickr we're installing for a calendar
import flatpickr from "flatpickr";
// and also adding some css styles
import '/node_modules/flatpickr/dist/flatpickr.min.css';
//adding notiflix for better warning window
import Notiflix from "notiflix";
//we're instanciating an input, a start button, a day, hour, minute and second spans
const refs = {
    input: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),
    day: document.querySelector('span[data-days]'),
    hour: document.querySelector('span[data-hours]'),
    minute: document.querySelector('span[data-minutes]'),
    second: document.querySelector('span[data-seconds]'),
}
//we're setting a disabled attribute on a start button 
refs.start.setAttribute('disabled', true);

//we're creating an object with keys and values for flatpickr library
const options = {
    altInput: true,
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // and on close of the window...
    onClose(selectedDates) {
      //...if new date is later than today...
        if (selectedDates[0] < new Date()) {
          //... we're disabling a start button
            refs.start.disabled = true;
            //and adding a customized window with further information
          Notiflix.Notify.failure("Please choose a date in the future");
        } else {
            //else start button is enabled for further countdown
          refs.start.disabled = false;
      }
  },
};

//we're calling a flatpickr function, placed on input. Function will execute an object with calendar details
flatpickr("input[type=text]", options);


//we're creating a function with formulas for countdown
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  //and destructuring them to return a properties   
  return { days, hours, minutes, seconds };
}

//we're creating a function, in which...
const onCountdown = (selectedTime) => {
    //we're setting an interval per second, in which...
    const display = setInterval(() => {
        //...start button is disabled
        refs.start.disabled = true;
        // ...counting the rest of the time by decreasing a custom time by an original
        let countdown = new Date(refs.input.value) - new Date();
        //if countdown less than or equal to zero...
        if (countdown >= 0) {
            //  ...we're placing a counting function with countdown into a data variable
            let data = convertMs(countdown);
            //  ...the text content of the span equals destructured property of the data convertMs function
                refs.day.textContent = data.days;
                refs.hour.textContent = data.hours;
                refs.minute.textContent = data.minutes;
                refs.second.textContent = data.seconds;
        } else {
            // ...if countdown is less than 0, stop the interval function 
                clearInterval(display);
            }    
        }, 1000)
}

// the most important - on click, execute the onCountdown function
refs.start.addEventListener("click", onCountdown);


