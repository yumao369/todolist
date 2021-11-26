import { connect } from "react-redux";
import {
  cancelNewTodoAction,
  saveNseTodoAction,
} from "../actions/setNewTodo_action";
import NewTodo from "../components/NewTodo";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickCancel: () => dispatch(cancelNewTodoAction()),
  onClickSave: () => dispatch(saveNseTodoAction()),
});

const MyNewTodo = connect(mapStateToProps, mapDispatchToProps)(NewTodo);

export default MyNewTodo;
