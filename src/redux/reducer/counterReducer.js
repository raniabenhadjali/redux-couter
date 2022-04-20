import { Increment } from "../actions";

const initialState={
    counter : 0
}
function counterReducer (state = initialState , action) {
    const {type , payload} = action
    switch (type) {
        case Increment :
            return {
                counter:payload.counter 
            }
    

       
            default : 
            return state 
    }
}
export default counterReducer