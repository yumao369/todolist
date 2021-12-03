import { addTodo, editTodo } from "../action";

const todos = (state = [], action) => {
  switch (action.type) {
    case addTodo:
      return [
        ...state,
        {
          date: action.date,
          id: action.id,
          content: action.content,
          iscompleted: action.iscompleted,
          category: action.category,
          hour: action.hour,
          minute: action.minute,
        },
      ];
    case editTodo:
      return state.map((item) =>
        item.id === action.id
          ? {
              ...item,
              content: action.content,
              category: action.category,
              hour: action.hour,
              minute: action.minute,
            }
          : item
      );
    default:
      return state;
  }
};

export default todos;
