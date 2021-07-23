import QuestionArray from '../components/QuestionArray';

const length=QuestionArray.length;
const max = (item1,item2) =>{
    if(item1>=item2)
        return item1;
    else 
        return item2;
}
const min = (item1,item2) =>{
    if(item1<=item2)
        return item1;
    else 
        return item2;
}
const counterReducer = (state=0,action) => {

    switch(action.type){
        case 'INCREMENT':
        return min(state +1,length-1);
        case 'DECREMENT':
        return max(state -1,0);
        case 'INITIALIZE':
        return 0;
        default:
        return state;
    }
}
export default counterReducer