//iniciar variaveis
let board = ['','','','','','','','','']
let playerTime = 0
let symbols = ['o','x']
let gameOver = false
let veia = false

function handleMove(position){
    if(gameOver){
        return;
    }
    if(veia){
        return;
    }
    if (board[position] == ''){
        board[position] = symbols[playerTime]
        gameOver = isWin() //Verificar se há um vencedor antes da proxima jogada
        if (gameOver == false){
            if(playerTime == 0){
                playerTime = 1
            }else{
                playerTime = 0
            }
              
        } 
    }
    veia = isVeia()  //verificar se deu veia
    
    return gameOver
    
    
}
function isWin(){
    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < winStates.length; i++){
        let seq = winStates[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]
        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != ''){
            return true
        }
    }

    return false
}

let counter = 9;
function isVeia(){
    if(counter > 0){
        counter = counter - 1
        console.log(counter)
        return false
    }
    return true
    
}