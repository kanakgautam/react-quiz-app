import React, { useState } from 'react'
import { useSelector, useDispatch,connect } from 'react-redux'
import { increment, decrement, sign_in, sign_out, set_value, set_answer, get_out } from '../actions'
import counterReducer from '../reducers/counter';
import loggedReducer from '../reducers/isLogged';
import './Form.css'

function Form(props) {

    const counter = useSelector(state => state.counter);
    const islogged = useSelector(state => state.islogged);
    const minutes = useSelector(state => state.minutes);
    const start = useSelector(state => state.start);
    const dispatch = useDispatch();
    const [inputNumber, setInputNumber] = useState(0);


    const handleChange = (event) => {
        const newNumber = event.target.value;
        setInputNumber(newNumber);
        console.log(inputNumber)

    }
    const handleClick = (event) => {
        if(inputNumber>0)
        {
        console.log(inputNumber)
        dispatch(set_value(inputNumber*60));
        dispatch(sign_in());
        dispatch(get_out());
        dispatch(set_answer([-1,-1,-1,-1,-1]))
        console.log(islogged);
        console.log(minutes);
        event.preventDefault();
        }
    }

    return (
        <div className='form-container'>
            <form className={start ? 'form-container':'form-container-inactive'}>
                <h1 className='quiz-heading'>Ready! Get Set! have a Quiz</h1>
                <div className='form-container-wrapper'>
                    <label className='form-container-label'>Set Time-limit (Minutes)</label>
                    <input className='form-container-input' min='0' type='number' onChange={handleChange} value={inputNumber} /> 
                </div>
                <button className='form-container-btn' onClick={handleClick}>Start Test</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    minutes: state.minutes,
    islogged: state.islogged,
    ansArray: state.ansArray,
    start:state.start
  });
  

export default connect(mapStateToProps)(Form)
