const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        console.log('[INCREMENT]')
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        console.log('[DECREMENT]')
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        console.log('[ADD 5]')
        return {
            counter: state.counter + 5
        }
    }
    if (action.type === 'SUBTRACT') {
        console.log('[SUBTRACT 5]')
        return {
            counter: state.counter - 5
        }
    }
    return state;
}

export default reducer;