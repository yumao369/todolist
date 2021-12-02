import { connect } from "react-redux";
import {
  cancelNewTodoAction,
  saveNseTodoAction,
  addTodoAction,
  editTodoAction,
  addIdAction,
} from "../action";
import NewTodo from "../components/NewTodo";

const mapStateToProps = (state) => {
  console.log("statenew", state);
  return {
    todoList: state.content,
    selectDate: state.selectDate.date,
    newTodoType: state.newTodoType.newTodoType,
    id: state.editId.id,
    listId: state.id.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickCancel: () => dispatch(cancelNewTodoAction()),
  onClickSave: () => dispatch(saveNseTodoAction()),
  onClickaddTodo: (id, date, content, iscompleted, category, deadline) =>
    dispatch(addTodoAction(id, date, content, iscompleted, category, deadline)),
  onClickeditTodo: (id, content, category, deadline) =>
    dispatch(editTodoAction(id, content, category, deadline)),
  onClickAddId: () => dispatch(addIdAction()),
});

const MyNewTodo = connect(mapStateToProps, mapDispatchToProps)(NewTodo);

export default MyNewTodo;
