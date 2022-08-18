document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})
function handleClick(event){
    //console.log(event.target)
    /* let square = event.target
    let position = square.id */
    if(handleMove(event.target.id)){
        setTimeout(()=>{
            alert("O Jogo Acabou - O vencedor foi " + playerTime)
        }, 10)
        
    }
    
    updateSquares()
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
function reset(){
    console.log('reseted')
    board = ['','','','','','','','','']
    playerTime = 0
    symbols = ['o','x']
    gameOver = false
    let squares = document.querySelectorAll('.square')
    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]
            square.innerHTML = ``
        
    })
}