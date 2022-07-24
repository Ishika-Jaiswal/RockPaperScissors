
function getComputerChoice() {
    let choices= ['Rock' , 'Paper' , 'Scissors' ]
    let ans = choices[Math.floor(Math.random() * 3)]
    return ans
  }
  
  function getResult(playerChoice, computerChoice) {
    let score;
  
     if (playerChoice === computerChoice) {
      score = 0
  
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = 1
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1
  
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      score = 1
  
    } else {
      score = -1
    }
    
    return score
    
  }
  
  function showResult(score, playerChoice, computerChoice) {
    
  
    let result= document.getElementById('result')
  
    switch(score){
      case 0: result.innerText='Its a Draw'
              break;
      case 1: result.innerText='You win!'
              break;
      case -1: result.innerText='You Lose!'
              break;
    }
  
    let playerScore= document.getElementById('player-score')
    let hands= document.getElementById('hands')
    playerScore.innerText= `${Number(playerScore.innerText) + score}`
    hands.innerText= `👱${playerChoice} vs  ${computerChoice}🤖` 
  }
  
  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score= getResult(playerChoice.value, computerChoice)
  
    showResult(score,playerChoice.value,computerChoice)
  }
  
  function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButtons= document.querySelectorAll('.rpsButton')
   rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton)
    })
  
  
    // Add a click listener to the end game button that runs the endGame() function on click
    let endGameBtn= document.getElementById('endGameButton')
    endGameBtn.onclick=()=> endGame()
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
    let playerScore= document.getElementById('player-score')
    let hands= document.getElementById('hands')
    let result= document.getElementById('result')
  
    playerScore.innerText= ''
    hands.innerText = ''
    result.innerText= ''
  }
  
  playGame()
  