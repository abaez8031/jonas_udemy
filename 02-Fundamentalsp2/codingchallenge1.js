'use strict'
const calcAvg = (score1,score2,score3) => (score1 + score2 + score3) / 3


// const koalasScore = calcAvg(65,54,49)
// const dolphinsScore = calcAvg(44,23,71)
const koalasScore = calcAvg(23,34,27)
const dolphinsScore = calcAvg(85,54,41)

const checkWinner = function(koalasScore, dolphinsScore) {
  if(koalasScore >= dolphinsScore * 2) {
    console.log(`Koalas win (${koalasScore} vs ${dolphinsScore})`)
  }
  else if (dolphinsScore >= koalasScore * 2) {
    console.log(`Dolphins win (${dolphinsScore} vs ${koalasScore})`)
  }
  else {
    console.log("Nobody won")
  }
}

checkWinner(koalasScore, dolphinsScore)