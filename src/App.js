import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch,connect } from 'react-redux'
import './App.css';
import { increment, decrement, set_answer, convert, initialize, revert, set_value, sign_out, get_in, hide } from './actions'
import Question from './components/Question'
import QuestionArray from './components/QuestionArray'
import Timer from './components/Timer'
import Form from './components/Form';
import counterReducer from './reducers/counter';

function App(props) {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const minutes = useSelector(state => state.minutes);
  const start = useSelector(state => state.start);
  const ansArray =useSelector(state => state.ansArray);
  const show =useSelector(state=>state.show);
  const dispatch = useDispatch();
  const [ansArr, setAnsArr] = useState([-1, -1, -1, -1, -1]);
  const[score, setScore]= useState(0);

  const changeArray = (item, index) => {
    let arr = [];
    for (let i = 0; i < ansArray.length; i++) {
      if (i === index) {
        arr.push(item)
      }
      else {
        arr.push(ansArray[i]);
      }
    }
    setAnsArr(arr);
    console.log(arr);
    console.log(ansArr);
    dispatch(set_answer(arr));
    console.log(ansArray);
    var tot =0;
    for(let i=0;i<ansArray.length;i++)
    {
      if(QuestionArray[i].correct===ansArray[i])tot++;
    }
    setScore(tot);
  }
  const handleclick = () =>{
    dispatch(set_value(0));
    dispatch(set_answer([-1,-1,-1,-1,-1]));
    dispatch(initialize());
    dispatch(sign_out());
    dispatch(get_in())
    dispatch(hide())
    console.log(islogged);
    console.log(show);
  }
  return (
    <>
      <div className='quiz-container'>
        <Form />
        <Timer />
        <div className={islogged ? 'question-slider' : 'question-slider-inactive'}>
          <button className='question-slider-btn' onClick={() => { dispatch(decrement()) }} >&lt;</button>
          {QuestionArray.map((item, index) => {
            if (index === counter)
              return (
                <Question question={item.question} option={item.option} onclick={changeArray} val={index} arr={ansArray} />
              )
          })}
          <button className='question-slider-btn' onClick={() => { dispatch(increment()) }} >&gt;</button>
        </div>
        <div className={show ? 'score-container':'score-container-inactive'} >
          <h1>Score:{score}/5</h1>
          <button className='Submit-btn' onClick={handleclick}>Submit</button>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  minutes: state.minutes,
  ansArray:state.ansArray,
  islogged:state.islogged,
  counter:state.counter,
  start:state.start,
  active:state.active,
  show:state.show
});

export default connect(mapStateToProps)(App);

