import React, {useState} from 'react';
import {Board} from './Board';
import {calculateWinner} from './Helper';

export const TicTac = ()=>{

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i =>{
        console.log("check");
        const boardCopy = [...board];
        // if user clicked an occupied square or if game is won , return 
        if(winner || board[i]) return;

        //put X or 0 in the clicked square
        boardCopy[i] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const jumpTo = ()=>{
        console.log("check");
    }

    const renderMoves = ()=>{
        return <button onClick={()=> setBoard(Array(9).fill(null))}>Start Game</button>
    }

    return (
        <div>
            <h2>Play Tic Tac Toe!!</h2>
            <div className="game-container"></div>
            <div>
                <p>{winner ? 'winner ' + winner : 'Next Player: ' + (xIsNext ? 'X' : '0')}</p>
                {renderMoves()}
            </div>
            <Board squares={board} onClick={handleClick} />
        </div>
        
    )
}