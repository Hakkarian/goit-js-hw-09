//because it contains only one function, we're exporting an entire file
export default
//we're creating a function with blank data, in which...
    function onDataObj(blank) {
    //we're spreading the data and returning its reduced version, 
    //by creating an accumulator, a dectructured name of the future form...
    return [...blank].reduce((acc, { name }) => {
      // ...and if this element contains name... 
        if(name) {
        //... the name of the acc object will have the number version of the value of named elements in the form
      acc[name] = Number(blank.elements[name].value);
        }
        //we're returning the acc, to have its value
    return acc;
  }, {}) //<------- this is an empty object and need for storing reduced data
  }