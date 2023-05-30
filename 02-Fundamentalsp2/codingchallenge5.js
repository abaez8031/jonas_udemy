const printForecast = function(arr) {
  let string = "... ";
  for(let i = 0; i < arr.length; i++) {
    string += `${arr[i]} °C in ${i + 1} days ... `
  }
  return string
}

const arr1 = [17,21,23]
const arr2 = [12,5,-5,0,4]

console.log(printForecast(arr1))
console.log(printForecast(arr2))