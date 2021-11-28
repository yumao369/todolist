import { addTodo } from "../actions/setNewTodo_action";

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          content: action.content,
          isComplete: false,
          class: "yellow",
          deadline: "data",
        },
      ];
    default:
      return state;
  }
};

export default todos;
