import { Increment , Decrement} from "../constants/action-types"

export const Increment =(paylood)=>{
    return {
        type : Increment,
        paylood
    }
}
export const Decrement =(paylood)=>{
    return {
        type : Decrement,
        paylood
    }
}