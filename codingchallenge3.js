// const dolphinsAvg = (96 + 89 + 108) / 3
// const koalasAvg = (88 + 91 + 110) / 3
// const dolphinsAvg = (97 + 112 + 101) / 3
// const koalasAvg = (109 + 95 + 123) / 3
// const dolphinsAvg = (96 + 89 + 108) / 3
// const koalasAvg = (88 + 91 + 110) / 3
console.log(dolphinsAvg)
console.log(koalasAvg)

if (koalasAvg < 100 && dolphinsAvg < 100) {
  console.log("Nobody wins the trophy")
}
else if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins Win")
}
else if (dolphinsAvg === koalasAvg) {
  console.log("There is a draw")
}
else if (koalasAvg > dolphinsAvg) {
  console.log("Koalas Win")
}
