import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

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

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

store.subscribe(() => {
    console.log(store.getState());
})

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10)
    store.dispatch(rnd(value));
});

// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch({type: 'INC'});
// });

// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch({type: 'DEC'});
// });

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10)
//     store.dispatch({type: 'RND', payload: value});
// });

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

// console.log(store.getState());

// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'})
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
        
        </>
    </React.StrictMode>
);
