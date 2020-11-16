import {
    GET_SERVICE
} from "../action/Service.actions";

const initialState = {
    listService : [],
}

export default function service(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICE:
            return {
                ...state,
                listService: action.payload
            }
        default:
            return state;
    }
}