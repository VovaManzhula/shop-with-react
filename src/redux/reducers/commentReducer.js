import { actions } from "./actions";

const initialState = {
    comments:[],
}

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_COMMENTS:
      return { ...state,
        comments:action.payload
   
    };
    default:
      return state;
  }
}

export default commentReducer;
