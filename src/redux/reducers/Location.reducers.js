import {
    GET_LOCATION
} from "../action/Location.action";

const initialState = {
    listLocation : [],
}

export default function location(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state,
                listLocation: action.payload
            }
        default:
            return state;
    }
}