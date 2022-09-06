/**
 * Implementation of Reducer to maintain Redux store
 */

import * as ActionType from "../Actions";
import { serviceName } from "../Utils/requests";
import { IUsers, IActionType } from "../Interfaces/initialState";

// initialization of Redux store
const initialState: IUsers = {
  isLoading: false,
  userData: [{ id: "1", username: "No User Found", contact : '' }],
  errorMessage : ''
}

const reducer = (state: IUsers = initialState, action: IActionType): IUsers => {
  switch (action.type) {
    case ActionType.FETCH_SUCCESS: {
      // condition to check which store object needs to update based on service name
      if (action.requestInfo === serviceName.login) {
        return {
          ...state,
          userData: action.response,
          isLoading: false,
        };
      }
      break;
    }
    case ActionType.FETCH_FAILED: {
      return {
        ...state,
        errorMessage: action.response,
        isLoading: false,
      };
    }
    case ActionType.FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
  return state;
};

export default reducer;
