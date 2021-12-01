import { combineReducers } from "redux";
import todos from "./addNewTodo_reducer";
import selectDateRe from "./selectDate_reducer";
import setNew from "./setNewTodo_reducer";

const rootReducer = combineReducers({
  text: setNew,
  content: todos,
  selectDate: selectDateRe,
});

export default rootReducer;
