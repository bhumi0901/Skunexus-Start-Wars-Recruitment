import { GET_ALL_PLANETS } from "../actions/types";

const initialState = {
  planets: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    default:
      return state;
  }
}
