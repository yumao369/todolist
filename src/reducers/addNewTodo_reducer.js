import { addTodo, complete, deleteTodo, editTodo } from "../action";

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
    case deleteTodo:
      return state.filter((item) => item.id !== action.id);
    case complete:
      return state.map((item) =>
        item.id === action.id
          ? { ...item, iscompleted: !item.iscompleted }
          : item
      );
    default:
      return state;
  }
};

export default todos;
