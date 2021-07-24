const showReducer =(state=false,action) =>{
    switch(action.type){
        case 'REVEAL':
        return true;

        case 'HIDE':
        return false;

        default:
            return state;
    }
}

export default showReducer;