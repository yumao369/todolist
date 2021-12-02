import { combineReducers } from "redux";
import addIdRe from "./addId_reducer";
// import addIdRe from "./addId_reducer";
import todos from "./addNewTodo_reducer";
import editIdRe from "./editId_reduce";
import selectDateRe from "./selectDate_reducer";
import setNewTotoType from "./setNewTodoType_reducer";
import setNew from "./setNewTodo_reducer";

const rootReducer = combineReducers({
  text: setNew,
  content: todos,
  selectDate: selectDateRe,
  newTodoType: setNewTotoType,
  editId: editIdRe,
  id: addIdRe,
});

export default rootReducer;
