import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators( actions, dispatch);
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators( {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rndDispatch = (value) => dispatch(rnd(value));

// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }
// store.subscribe(() => {
//     console.log(getState()); 
// })

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10)
    rnd(value);
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
