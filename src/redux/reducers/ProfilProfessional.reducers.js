import { GET_DATA_PROFESSIONAL } from "../action/ProfilProfessional.action";

const initialState = {
  data: [],
};

export default function profesi(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_PROFESSIONAL:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
