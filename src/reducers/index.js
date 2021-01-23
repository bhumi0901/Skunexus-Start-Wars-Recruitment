import { combineReducers } from "redux";
import planet from "./planet";

const appReducer = combineReducers({
  planet: planet,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
