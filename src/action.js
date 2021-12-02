export const setNewTodo = "setNewTodo";
export const cancelNewTodo = "cancelNewTodo";
export const saveNseTodo = "saveNseTodo";
export const newTodoType = "newTodoType";
export const editNewTodoType = "editNewTodoType";
export const addTodo = "addTodo";
export const selectDate = "selectDate";
export const addId = "addId";
export const editTodo = "editTodo";
export const editId = "editId";
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
  return {
    type: saveNseTodo,
  };
}

export const newTodoTypeAction = () => {
  return {
    type: newTodoType,
  };
};

export const editNewTodoTypeAction = () => {
  return {
    type: editNewTodoType,
  };
};

export const selectDateAction = (date) => {
  return {
    type: selectDate,
    date,
  };
};

export const addIdAction = () => {
  return {
    type: addId,
  };
};

export const addTodoAction = (
  id,
  date,
  content,
  iscompleted,
  category,
  deadline
) => {
  return {
    type: addTodo,
    id,
    date,
    content,
    iscompleted,
    category,
    deadline,
  };
};

export const editTodoAction = (id, content, category, deadline) => {
  return {
    type: editTodo,
    id,
    content,
    category,
    deadline,
  };
};

export const editIdAction = (id) => {
  return {
    type: editId,
    id,
  };
};
