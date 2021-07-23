const activeReducer =(state='false',action) =>{
    switch(action.type){
        case 'CONVERT':
        return true;

        case 'REVERT':
        return false;

        default:
            return !state;
    }
}

export default activeReducer;