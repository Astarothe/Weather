import {STATUS} from "../constants/constants";

const initialState = {
    status: null
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type){
        case STATUS:
            return {
                ...state,
                status: action.data
            }
        default:
            return state
    }
}