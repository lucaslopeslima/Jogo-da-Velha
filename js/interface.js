document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
    updatePlayer() 

})
function handleClick(event){
    console.log(event.target)
    /* let square = event.target
    let position = square.id */
    
    if(handleMove(event.target.id)){
        setTimeout(()=>{
            /* alert("O Jogo Acabou - O vencedor foi " + playerTime) */
            if(playerTime == 0){
                alert("O Jogo Acabou - O vencedor foi o Player 'O'.")  
            } else {
                alert("O Jogo Acabou - O vencedor foi o Player 'X'.")
            }
        }, 20)
    }
    checkVeia()
    updateSquares()
    updatePlayer()
    
}
function updateSquares(){
    let squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
function updatePlayer(){
    let playerO = document.getElementById('o')
    let playerX = document.getElementById('x')
    let player = document.querySelectorAll('.player')
    //console.log(player)
    player.forEach((player)=>{
        player.classList.remove('player-active')
    })
    if (playerTime == 0){
        //console.log(playerTime)
        //console.log(playerO)
        playerO.classList.add('player-active')
    } if (playerTime == 1){
        //console.log(playerTime)
        //console.log(playerX)
        playerX.classList.add('player-active')
    }
}
function checkVeia(){
    let modal = document.getElementById('veia-modal')
    if (counter == 0 && gameOver == false) {
        //console.log(counter)
        console.log('deu veia')
        modal.classList.add('modal-active')
        reset()
        setTimeout(()=>{
            modal.classList.remove('modal-active')
        }, 2000)
    }
}
function reset(){
    console.log('reseted')
    board = ['','','','','','','','','']
    playerTime = 0
    symbols = ['o','x']
    gameOver = false
    veia = false
    counter = 9
    let squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
            square.innerHTML = ``
        
    })
}