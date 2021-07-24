import React, { useState } from 'react'
import './Question.css'

function Question(props) {
   const {arr,val,onclick,question,option}=props;
    const [point, setPoint] = useState(0);

    return (
        <div class='question-card'>
            <div className='question-card-question'>
                <h1>{question}</h1>
            </div>
            {option.map((item, index) => {
                if (index === arr[val]) {
                    return (
                        <div className='question-card-option'>
                            <button className='question-card-btn-selected' onClick={()=>{
                                onclick(index,val);
                            }}></button><p>{item}</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='question-card-option'>
                            <button className='question-card-btn' onClick={()=>{
                                onclick(index,val);
                            }}></button><p>{item}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Question
