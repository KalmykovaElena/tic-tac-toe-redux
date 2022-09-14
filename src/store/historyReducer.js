const defaultState = {

    history: {
        0: []
    }

}

export const historyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'click':
            return {...state, history: action.addHistory}
        case'goToStep':
            return {
                ...state, history: Object.keys(state.history).reduce(function (r, e) {
                    if (e <= action.step) r[e] = state.history[e]
                    return r;
                }, {})
            }
        case 'clearBoard':
            return {...state, history: {0: []}}

        default:
            return state
    }
}