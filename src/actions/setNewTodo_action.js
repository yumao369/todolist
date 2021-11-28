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
  console.log("1111");
  return {
    type: saveNseTodo,
  };
}

export const addTodoAction = (content) => {
  console.log("addcontent", content);
  console.log("2222");
  return {
    type: addTodo,
    content,
  };
};
