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
        console.log('[ADD]')
        return {
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUBTRACT') {
        console.log('[SUBTRACT]')
        return {
            counter: state.counter - action.value
        }
    }
    return state;
}

export default reducer;