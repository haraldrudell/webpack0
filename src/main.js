(function () { // this will be in the browser global scope, so wrap it inside a function expression
  const x = 'EcmaScript 2015 parsing ok'
  console.log(x)

  var p = document.getElementById('ptag')
  if (p) p.innerHTML = 'JavaScript executed successfully.'
})()
