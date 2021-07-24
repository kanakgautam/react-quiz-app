const initialState =[-1,-1,-1,-1,-1];

const ansArrayReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'SET_ANSWER':
            return [...action.payload];

        default :
            return state;
    }
};

export default ansArrayReducer;