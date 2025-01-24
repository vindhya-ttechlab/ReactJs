import { useState } from "react";


export default function TicTacToe()
{

    Square=({value,onSqaureClick})=>
    {
        return(
            <>
            <button className="square" onClick={onSqaureClick}>{value}</button>
            </>
        );
        
    
    }

    Board=({xIsNext,squares,onPlay})=>
    {   
        handleClick(i)
        {
            if(calculateWinner(squares)||squares[i])
            {
                return;
            }

            const nextSquare=squares.slice();
            if(xIsNext)
            {
                nextSquare[i]='X';
            }else{
                nextSquare[i]='O'
            }

            onPlay(nextSquare);
        }
        const winner=calculateWinner(squares);
        let status;
        if(winner)    
        {
            status='winner: '+ winner;
        }else
        {
             status='Next'
        }
    }

    return(
        <>
        </>
    )
}