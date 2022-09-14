import '../styles/component/Game.css'
import Board from "./Board";
import {useDispatch, useSelector} from "react-redux";
import {getWinner} from "../halper";

const Game = () => {
    const dispatch = useDispatch()
    const board = useSelector(state => state.board.board)
    const xIsNext = useSelector(state => state.board.xIsNext)
    const history = useSelector(state => state.history.history)
    const winner = getWinner(board)
    let currentIndex = useSelector(state => state.board.currentSquare)
    const stepNumber = Object.keys(history).length

    const handleClick = (ind) => {
        const squares = [...board]
        if (winner || squares[ind]) return
        squares[ind] = xIsNext ? 'X' : '0'
        const newHistory = {...history}
        newHistory[stepNumber] = [squares, xIsNext, ind]
        dispatch({type: 'click', payload: squares, index: ind, addHistory: newHistory})
    }
    const startNewGame = () => {
        return (
            <button className='startBtn' onClick={() => {
                dispatch({type: 'clearBoard'})
            }
            }>Очистить поле</button>
        )
    }

    const goToStep = (step) => {
        dispatch({type: 'goToStep', historyPoint: history[step], step: step})
    }

    return (
        <div className='wrapper'>
            <div className='wrapper-content'>
                {startNewGame()}
                <Board arrayOfsquares={board} clickSquare={handleClick} current={currentIndex}
                       winningSquares={winner ? winner.line : []}/>
                <p className='gameInfo'>
                    {winner ? 'победитель ' + winner.player
                        : board.every((el) => !!el)
                            ? 'У вас ничья'
                            : 'Сейчас ходит ' + (xIsNext ? 'X' : '0')}
                </p>
            </div>
            <div className='history'>
                <h3>История</h3>
                <div className='historyPoint'>
                    {Object.keys(history).map((step) => {
                        const nameButton = +step !== 0 ? `Перейти к ходу ${step}` : `Перейти в начало игры`
                        return <button key={step} onClick={() => {
                            if (+step !== 0) {
                                goToStep(step)
                            } else {
                                dispatch({type: 'clearBoard'})
                            }
                        }
                        }>{+step === stepNumber - 1 ? <b>{nameButton}</b> : nameButton}</button>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Game;