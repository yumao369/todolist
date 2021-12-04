import { connect } from "react-redux";
import {
  CompleteAction,
  deleteTodoAction,
  editIdAction,
  editNewTodoTypeAction,
  setNewTodoAction,
} from "../action";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickEdit: () => dispatch(setNewTodoAction()),
  onclickEditNew: () => dispatch(editNewTodoTypeAction()),
  onclickEditId: (id) => dispatch(editIdAction(id)),
  onClickDeleteTodo: (id) => dispatch(deleteTodoAction(id)),
  onClickComplete: (id) => dispatch(CompleteAction(id)),
});

const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default MyTodoList;
