import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sign_in, sign_out, set_value } from '../actions'
import counterReducer from '../reducers/counter';
import loggedReducer from '../reducers/isLogged';
import './Form.css'

function Form() {

    const counter = useSelector(state => state.counter);
    const islogged = useSelector(state => state.islogged);
    const minutes = useSelector(state => state.minutes);
    const [isActive, setIsActive] = useState(true);
    const dispatch = useDispatch();
    const [inputNumber, setInputNumber] = useState(0);

    const handleclick = () => {

    }

    const handleChange = (event) => {
        const newNumber = event.target.value;
        setInputNumber(newNumber);
        console.log(inputNumber)
        dispatch(set_value(0));

    }
    const handleClick = (event) => {
        console.log(inputNumber)
        dispatch(set_value(inputNumber*60));
        dispatch(sign_in());
        event.preventDefault();
        setIsActive(false);
    }

    return (
        <div className='form-container'>
            <form className={islogged ? 'form-container-inactive' : isActive ? 'form-container' : 'form-container-inactive'}>
                <div className='form-container-wrapper'>
                    <label className='form-container-label'>Set Time-limit (Minutes)</label>
                    <input className='form-container-input' type='number' onChange={handleChange} value={inputNumber} /> 
                </div>
                <button className='form-container-btn' onClick={handleClick}>Start Test</button>
            </form>
        </div>
    )
}

export default Form
