//we're importing a library for fancy notifications
import { Notify } from "notiflix";
// a promise -------------> let's dive into it
import { createPromise } from './promise'
// and  an object, feel free to check
import onDataObj from "./dataObj";

//the rest is also simple - we're declaring a form
const form = document.querySelector('.form');

//we're creatng a function, in which...
const onSubmit = (e) => {
  //  ...preventing a page from reloading...
  e.preventDefault();
  // ...destructuring three names from form inputs...
  let { delay, step, amount } = onDataObj(form);
  // for each number in the amount...
  for (let i = 0; i < amount; i++) {
      //...we're creating a promise with dynamic delay
    createPromise(i, delay)
      //...if it resolves, plays happy ending
      .then(resolvation)
      //...if it throws an error, plays failure
      .catch(rejectance)
      //...execute this in any case
      .finally();
    //  ...and adding a step to delay for each iteration, simulating an interval
      delay += step;
    }
}
  //when resolves...
const resolvation = (({ position, delay }) => {
    // ...creates a succesful notification
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}) 
  //when rejects...
const rejectance = (({ position, delay }) => {
    // ...creates a, well, unsucceful notification, sounds logic
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  // the most important - hanging a submit listener on the form
form.addEventListener("submit", onSubmit)
