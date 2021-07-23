import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { increment, decrement, set_answer, convert, initialize, revert } from './actions'
import Question from './components/Question'
import QuestionArray from './components/QuestionArray'
import Timer from './components/Timer'
import Form from './components/Form';
import counterReducer from './reducers/counter';

function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged);
  const minutes = useSelector(state => state.minutes);
  const start = useSelector(state => state.start);
  const ansArray =useSelector(state => state.ansArray);
  const active =useSelector(state=>state.active);
  const dispatch = useDispatch();
  const [ansArr, setAnsArr] = useState([-1, -1, -1, -1, -1]);
  const[score, setScore]= useState(0);

  const changeArray = (item, index) => {
    let arr = [];
    for (let i = 0; i < ansArr.length; i++) {
      if (i === index) {
        arr.push(item)
      }
      else {
        arr.push(ansArr[i]);
      }
    }
    setAnsArr(arr);
    console.log(arr);
    console.log(ansArr);
    dispatch(set_answer(arr));
    console.log(ansArray);
  }
  const calc = () =>{
    var tot =0;
    for(let i=0;i<ansArray.length;i++)
    {
      if(QuestionArray[i].correct===ansArray[i])tot++;
    }
    handleScore(tot);
    return tot;
  }

  const handleScore =(val) =>{
      if(start)
        setScore(val);
      console.log(score);
  }

  useEffect(()=>{
    calc();
  })
  return (
    <>
      <div className='quiz-container'>
        <Form />
        <Timer minutes={minutes} />
        <div className={start ? 'question-slider' : 'question-slider-inactive'}>
          <button className='question-slider-btn' onClick={() => { dispatch(decrement()) }} >&lt;</button>
          {QuestionArray.map((item, index) => {
            if (index === counter)
              return (
                <Question question={item.question} option={item.option} onclick={changeArray} val={index} arr={ansArray} />
              )
          })}
          <button className='question-slider-btn' onClick={() => { dispatch(increment()) }} >&gt;</button>
        </div>
        <div className={start? 'score-container-inactive':'score-container'} >
          <h1>Score:{score}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
