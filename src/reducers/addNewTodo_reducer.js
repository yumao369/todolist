import { addTodo } from "../action";

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          date: action.date,
          content: action.content,
          iscompleted: action.iscompleted,
          category: action.category,
          deadline: action.deadline,
        },
      ];
    default:
      return state;
  }
};

export default todos;
