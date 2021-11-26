export const setNewTodo = "setNewTodo";
export const cancelNewTodo = "cancelNewTodo";
export const saveNseTodo = "saveNseTodo";
export const addTodo = "addTodo";

export function setNewTodoAction() {
  return {
    type: setNewTodo,
  };
}

export function cancelNewTodoAction() {
  return {
    type: cancelNewTodo,
  };
}

export function saveNseTodoAction() {
  return {
    type: saveNseTodo,
  };
}

export const addTodoAction = (content) => {
  return {
    type: addTodo,
    content,
  };
};
