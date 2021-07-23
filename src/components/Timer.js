import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sign_in, sign_out, begin, get_in, get_out, multiply, decrease, subtract, set_value, set_answer, initialize, convert } from '../actions'
import loggedReducer from "../reducers/isLogged";
import './Timer.css'

const Timer = () => {
    const minutes = useSelector(state => state.minutes);
    let time = minutes;
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const start = useSelector(state => state.start);
    const counter = useSelector(state => state.counter);
    const islogged = useSelector(state => state.islogged)

    const dispatch = useDispatch();
    
    var interval;

    const startTimer = () => {
        setIsActive(!isActive);
        dispatch(get_in());
        interval = setInterval(() => {
            time--;
            console.log(minutes);
            dispatch(set_value(time));
            if (time <= 0) {
                clearInterval(interval);
                dispatch(sign_out());
                dispatch(get_out());
                dispatch(set_value(0));
                console.log(islogged);
            }
            setSecond(time % 60);
            setMinute(Math.floor(time / 60));
        }, 1000);
    }
    const stopTimer = () => {
        time=0;
        dispatch(sign_out());
        dispatch(get_out());
        dispatch(set_value(0));
        dispatch(convert());
        dispatch(set_answer([-1,-1,-1,-1,-1]));
        dispatch(initialize());
        clearInterval(interval);

    }
 

    return (
        <>
            <div class={islogged ? 'timer-container' : 'timer-container-inactive'} onLoad={startTimer}>
                <div class="timer-wrapper">
                    <div className='time-clock'>
                        <span class="minute">{minute}</span>
                        <span>:</span>
                        <span class="second">{second}</span>
                    </div>
                </div>
                <div >
                    {isActive ? <button className="timer-btn" onClick={stopTimer}>Submit</button> : <button className="timer-btn" onClick={startTimer}>Start-timer</button>}
                </div>
            </div>
        </>

    );
};

export default Timer;
