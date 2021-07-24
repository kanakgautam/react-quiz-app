import React, {  useEffect } from "react";
import { useState } from "react";
import { connect} from 'react-redux'
import {  convert, hide, reveal, sign_out, subtract } from '../actions'
import './Timer.css'

const Timer = (props) => {

    const [min,setMin]=useState('00');
    const [sec,setSec]=useState('00');
    useEffect(() => {
        const timer= setTimeout(
            () => {
                props.dispatch(subtract())
                console.log(props.minutes);
                console.log(props.show)
                console.log(props.start)
                if(Math.floor((props.minutes)/60)>=10)
                    setMin(Math.floor((props.minutes)/60)+':');
                else
                    setMin('0'+Math.floor((props.minutes)/60)+':');
                if(((props.minutes)%60)>=10)
                    setSec(((props.minutes)%60));
                else
                    setSec('0'+((props.minutes)%60));
                if(props.minutes===0)
                {
                    console.log(props.minutes);
                    props.dispatch(sign_out());
                }
                if(props.minutes===1)
                {
                    props.dispatch(reveal())
                }
            },1000
        );
        return () => clearTimeout(timer)
    });
    return (
        <>
            <div class={props.islogged? 'timer-container':'timer-container-inactive'}>
                <div class="timer-wrapper">
                    <div className={(props.minutes<10)?'clock-timer-red':'clock-timer'}>
                        <span className="minute">{min}</span>
                        <span className='second'>{sec}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    minutes: state.minutes,
    islogged:state.islogged,
    show:state.show,
    start:state.start
  });

  export default connect(mapStateToProps)(Timer);
