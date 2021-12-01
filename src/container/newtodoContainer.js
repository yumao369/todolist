import { connect } from "react-redux";
import {
  cancelNewTodoAction,
  saveNseTodoAction,
  addTodoAction,
} from "../action";
import NewTodo from "../components/NewTodo";

const mapStateToProps = (state) => {
  console.log("statenew", state);
  return {
    todoList: state.content,
    selectDate: state.selectDate.date,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickCancel: () => dispatch(cancelNewTodoAction()),
  onClickSave: () => dispatch(saveNseTodoAction()),
  onClickaddTodo: (date, content, iscompleted, category, deadline) =>
    dispatch(addTodoAction(date, content, iscompleted, category, deadline)),
});

const MyNewTodo = connect(mapStateToProps, mapDispatchToProps)(NewTodo);

export default MyNewTodo;
