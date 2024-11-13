// import { connect } from "react-redux";
import {inc, dec, rnd} from '../actions';
// import * as actions from '../actions';
// import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    // const counter = useSelector(state => {
    //     return {
    //         counter: state.counter
    //     }
    // });
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

// const Counter = ({counter, inc, dec, rnd}) => {
//     return (
//         <div className="jumbotron">
//             <h1>{counter}</h1>
//             <button onClick={dec} className="btn btn-primary">DEC</button>
//             <button onClick={inc} className="btn btn-primary">INC</button>
//             <button onClick={rnd} className="btn btn-primary">RND</button>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     return {
//         inc: () => dispatch({type: 'INC'})
//         inc: () => dispatch(inc()),
//         rnd: () => {
//             const value = Math.floor(Math.random() * 10);
//             rnd(value);
//         }
//         inc,
//         dec,
//         rnd
//     }
//     return bindActionCreators(actions, dispatch);
// }

// export default connect(mapStateToProps, actions)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;