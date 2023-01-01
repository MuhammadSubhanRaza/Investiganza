const initialState = {}

const SetTheProfileGlobal = (state = initialState,action) =>{
    switch (action.type)
    {
        case "setProfile" :
            state = action.payload;
            return state
        default:
            return state;
    }
}


export default SetTheProfileGlobal
