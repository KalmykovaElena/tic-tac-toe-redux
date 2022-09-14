const defaultState = {
    board: Array(9).fill(null),
    xIsNext: true,
    currentSquare: null,

}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'click':
            return {...state, board: action.payload, xIsNext: !state.xIsNext, currentSquare: action.index}
        case 'clearBoard':
            return {...state, board: Array(9).fill(null), xIsNext: true, currentSquare: null}
        case 'goToStep':
            return {
                ...state,
                board: action.historyPoint[0],
                xIsNext: !action.historyPoint[1],
                currentSquare: action.historyPoint[2]
            }
        default:
            return state
    }
}