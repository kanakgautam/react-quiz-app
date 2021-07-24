const max = (item1,item2) =>{
    if(item1>=item2)
        return item1;
    else 
        return item2;
}


const minuteReducer = (state=0,action) =>{
    switch(action.type){
        case 'SET_VALUE':
        return max(0,action.payload);

        case 'MULTIPLY':
            return (state*action.payload);

        case 'REDUCTION':
            return max(0,state-1)

        default:
        return state;
    }
}

export default minuteReducer;