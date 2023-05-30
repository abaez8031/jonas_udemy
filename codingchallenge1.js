const calculateBMI = function(mass,height) {
const BMI = mass / (height * height)
return BMI
}

const markBMI1 = calculateBMI(78, 1.69)
const johnBMI1 = calculateBMI(92,1.95)
const markBMI2 = calculateBMI(95,1.88)
const johnBMI2 = calculateBMI(85,1.76)
const markHigherBMI1 = markBMI1 > johnBMI1
const markHigherBMI2 = markBMI2 > johnBMI2
console.log(markBMI1)
console.log(johnBMI1)
console.log(markBMI2)
console.log(johnBMI2)
console.log(markHigherBMI1)
console.log(markHigherBMI2)

