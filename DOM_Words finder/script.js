
function convert(){
  const celVal = Number(document.getElementById("input").value)
  const fahVal = ((9/5) * celVal )+32
  const result = document.getElementById("result")
  result.innerHTML = fahVal.toFixed(3) + " Fahrenheit"
}
