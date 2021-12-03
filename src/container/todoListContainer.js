import { connect } from "react-redux";
import {
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
});

const MyTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default MyTodoList;
