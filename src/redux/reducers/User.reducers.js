import { LOGIN, USERREGISTER, PROREGISTER } from "../action/User.action";

// --------------- Check Token ---------------
const token = localStorage.getItem("token");

const initialState = token ? {
isLogged : true,
data : [],
error : null,
} : 
{
isLogged : false,
data : [],
error : null,
};

// --------------- Reducer User ---------------
export default function user ( state=initialState, action ) {
    switch (action.type) {
        case USERREGISTER :
            return {
                registerData : action.payload,
            };
        case PROREGISTER :
            return {
                registerData : action.payload,
            };
        case LOGIN :
            return {
                ...state,
                isLogged : true,
            };
        default :
            return state;

        
    };
};