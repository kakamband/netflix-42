import {
    UPDATE_PROFILE
  } from "../../actions/ActionType";
  
  const initialState = {
    profileUpdated: "",
};

export default function(state = initialState, action) {
    switch (action.type) {
        
        case UPDATE_PROFILE:
            return {
                profileUpdated: action.payload,
            };
        
        default:
            return state;
    }
}