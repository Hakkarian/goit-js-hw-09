//we're exporting only one function, by placing it into the curly braces - sure, why not?
export { createPromise }
//we're creating a function with position and delay parameters, and in this function...
function createPromise(position, delay) {
  // ...we're marking the point when result should by fulfilling or outrageous
  const shouldResolve = Math.random() > 0.3;
  // ...we're promising our program and our program is promising us 
  // ...that will find both two options - positive and negative...
  return new Promise((resolve, reject) => {
    //...we're setting the timeout...
    setTimeout(() => {
      // ...if these unstable boundaries exist...
      if (shouldResolve) {
      //...it will returns with value of the resolve function 
      // and its dectructured parameters of position and delay...
        return resolve({ position, delay });
        //...otherwise...
      } else {
        //...just call for the reject function with said parameters
      reject({ position, delay });
    }
  }, delay) //<----- this thing will need us to delay notifications with promises
  })
    
}