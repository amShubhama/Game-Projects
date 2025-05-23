import React, { useState } from 'react'
import Card from '../card/Card'
import './Grid.css'
import { toast } from 'react-toastify';
const Grid = ({numberOfCards}) => {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn] = useState(true); 
    const [winner, setWinner] = useState('');
    function play(idx) {
        if(board[idx]) return;
        setTurn(!turn);
        console.log(idx);
        board[idx] = turn ? 'circle' : 'cross';
        setBoard([...board]);
        let won = win();
        if(won) {
            setWinner(won);
            toast.success(`🎉 ${won=='circle'?'O':'X'} Won the Match`.toUpperCase(),{
                position:'top-center',
                theme:"colored",
                autoClose:"3000"
            })
        }
    }
    function win(){
        if(board[0]==board[1] && board[1]==board[2]) return board[0];
        if(board[3]==board[4] && board[5]==board[4]) return board[3];
        if(board[6]==board[7] && board[7]==board[8]) return board[6];

        if(board[0]==board[3] && board[3]==board[6]) return board[0];
        if(board[1]==board[4] && board[4]==board[7]) return board[1];
        if(board[2]==board[5] && board[5]==board[8]) return board[2];

        if(board[0]==board[4] && board[4]==board[8]) return board[0];
        if(board[2]==board[4] && board[4]==board[6]) return board[2];
    }
  return (
    <div style={{justifyItems:'center',  justifySelf:'center'}}>
    {winner && 
    <>
    <h1 style={{color:'white'}}>Player {winner=='circle'?'O':'X'} won the match</h1> 
    <button 
    style={{width:'300px', height:'60px', backgroundColor:'yellow', fontWeight:"600", border:'2px solid white', borderRadius:'4px', fontSize:'30px', cursor:'pointer'}}
    onClick={()=>{setBoard(new Array(numberOfCards).fill('')); setWinner('')}}
    >Play Again!
    </button>
    </>
    }
    {!winner && <h1 style={{color:'white'}}>Current Turn : {turn ? 'O' : 'X'}</h1>}
    <div className='grid'>
    {board.map((ele,idx) =><Card onPlay={()=>winner ? '' : play(idx)} key={idx} iconName={ele}/>)}
    </div>
    </div>
  )
}

export default Grid