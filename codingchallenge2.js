const calculateBMI = function(mass,height) {
  const BMI = mass / (height * height)
  return BMI
  }
  
  const markBMI1 = calculateBMI(78, 1.69)
  const johnBMI1 = calculateBMI(92,1.95)
  if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})`)
  }
  else {
    console.log(`John's BMI (${johnBMI1}) is higher than John's BMI (${markBMI1})`)
  }
  const markBMI2 = calculateBMI(95,1.88)
  const johnBMI2 = calculateBMI(85,1.76)
  if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2})`)
  }
  else {
    console.log(`John's BMI (${johnBMI2}) is higher than John's BMI (${markBMI2})`)
  }
