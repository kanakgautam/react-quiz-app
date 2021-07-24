export const increment = () =>{
    return {
        type: 'INCREMENT'
    };
}

export const decrement = () =>{
    return {
        type: 'DECREMENT'
    };
}

export const initialize = () =>{
    return {
        type: 'INITIALIZE'
    };
}


export const sign_in = () =>{
    return{
        type: 'SIGN_IN'
    }
}

export const sign_out = () =>{
    return{
        type: 'SIGN_OUT'
    }
}

export const set_value =(number) =>{
    return{
        type: 'SET_VALUE',
        payload:number
    };
};

export const get_in = () =>{
    return{
        type: 'GET_IN'
    }
}

export const get_out = () =>{
    return{
        type: 'GET_OUT'
    };
}

export const multiply = (number) =>{
    return{
        type: 'MULTIPLY',
        payload:number
    };
}

export const subtract = () =>{
    return{
        type: 'REDUCTION'
    };
}

export const set_answer = (array)=>{
    return{
        type: 'SET_ANSWER',
        payload: array
    }
}

export const revert = () =>{
    return{
        type: 'REVERT'
    }
}

export const convert = () =>{
    return{
        type: 'CONVERT'
    }
}

export const reveal = () =>{
    return{
        type:'REVEAL'
    }
}

export const hide = () =>{
    return{
        type:'HIDE'
    }
}

