import { newTodoType, editNewTodoType } from "../action";

const setNewTotoType = (state = { newTodoType: true }, action) => {
  switch (action.type) {
    case newTodoType:
      return {
        ...state,
        newTodoType: true,
      };
    case editNewTodoType:
      return {
        ...state,
        newTodoType: false,
      };
    default:
      return state;
  }
};

export default setNewTotoType;
