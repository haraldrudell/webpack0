/*
webpack will invoke this code with:
this value being the exports object, ie. an empty object literal
and arguments:
module
module.exports (same as this)
a webpack require function

The wrapping function is anonymous and part of a JavaScript expression,
ie. it is not initially referenced from the global scope
*/
// const is EcmaScript 2015, so if this works, that means that babel works.
const x = 'EcmaScript 2015 parsing ok'
console.log(x)

// update a visible element in the page to prove that JavaScript is working.
var p = document.getElementById('ptag')
if (p) p.innerHTML = 'JavaScript executed successfully.'
