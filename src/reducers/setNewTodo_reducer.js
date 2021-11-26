import {
  setNewTodo,
  cancelNewTodo,
  saveNseTodo,
} from "../actions/setNewTodo_action";

const setNew = (state = { text: false }, action) => {
  switch (action.type) {
    case setNewTodo:
      return { ...state, text: true };
    case cancelNewTodo:
      return { ...state, text: false };
    case saveNseTodo:
      return { ...state, text: false };
    default:
      return state;
  }
};

export default setNew;
