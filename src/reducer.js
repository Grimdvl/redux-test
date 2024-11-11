const initialState = {value: 0};

const reducer = (state = initialState, action) => {
    // if (action.type === 'INC') {
    //     return state +1;
    // }
    // return 0;
    switch (action.type) {
        case 'INC':
            // return state + 1;
            return {
                ...state,
                value: state.value + 1
            };
        case 'DEC':
            // return state - 1;
            return {
                ...state,
                value: state.value - 1
            };
        case 'RND':
            // return state * action.payload;
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

export default reducer;