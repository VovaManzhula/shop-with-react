import { actions } from "./actions";

const initialState = {
    posts:[],
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_DATA:
      return { ...state,
        posts:action.payload
   
    };
 
    default:
      return state;
  }
}

export default postReducer;
