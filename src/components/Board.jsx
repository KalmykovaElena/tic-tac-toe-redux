import React from 'react';
import '../styles/component/Board.css'
import Square from "./Square";

const Board = (props) => {
    return (
        <div className='board'>
            {
                props.arrayOfsquares.map((el, ind) => {

                    return <Square key={ind} value={el} click={() => props.clickSquare(ind)}
                                   isCurrent={props.current === ind}
                                   isWinning={props.winningSquares.includes(ind)}
                    />
                })
            }

        </div>
    );
};

export default Board;