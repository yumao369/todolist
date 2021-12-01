export const setNewTodo = "setNewTodo";
export const cancelNewTodo = "cancelNewTodo";
export const saveNseTodo = "saveNseTodo";
export const addTodo = "addTodo";
export const selectDate = "selectDate";
let todoId = 0;
let defaultCategory = { border: "orangeBorder", inner: "orangeClass" };
let defaultDeadline = null;

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

export const selectDateAction = (date) => {
  return {
    type: selectDate,
    date,
  };
};

export const addTodoAction = (
  date,
  content,
  iscompleted,
  category,
  deadline
) => {
  return {
    type: addTodo,
    date,
    content,
    iscompleted,
    category,
    deadline,
  };
};
