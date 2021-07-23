const startedReducer = (state = false, action) => {
    switch (action.type) {
        case 'GET_IN':
            return true;
        case 'GET_OUT':
            return false;
        default:
            return state
    }
};
export default startedReducer;