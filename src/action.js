export const setNewTodo = "setNewTodo";
export const cancelNewTodo = "cancelNewTodo";
export const saveNseTodo = "saveNseTodo";
export const newTodoType = "newTodoType";
export const editNewTodoType = "editNewTodoType";
export const addTodo = "addTodo";
export const selectDate = "selectDate";
export const addId = "addId";
export const editTodo = "editTodo";
export const deleteTodo = "deleteTodo";
export const editId = "editId";
export const complete = "complete";
export const changeSkin = "changeSkin";

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
  hour,
  minute
) => {
  return {
    type: addTodo,
    id,
    date,
    content,
    iscompleted,
    category,
    hour,
    minute,
  };
};

export const editTodoAction = (id, content, category, hour, minute) => {
  return {
    type: editTodo,
    id,
    content,
    category,
    hour,
    minute,
  };
};

export const deleteTodoAction = (id) => {
  console.log("deleteTodo");
  return {
    type: deleteTodo,
    id,
  };
};

export const editIdAction = (id) => {
  return {
    type: editId,
    id,
  };
};

export const CompleteAction = (id) => {
  return {
    type: complete,
    id,
  };
};

export const skinAction = (color) => {
  return {
    type: changeSkin,
    color,
  };
};
