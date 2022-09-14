import React from 'react';
import '../styles/component/Square.css'

const Square = (props) => {
    return (
        <div>

            <button
                className={'square ' + (props.isWinning ? 'square--winning' : props.isCurrent ? 'square--current' : null)}
                onClick={props.click}>{props.value}</button>
        </div>
    );
};

export default Square;