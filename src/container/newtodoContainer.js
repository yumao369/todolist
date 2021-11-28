import { connect } from "react-redux";
import {
  cancelNewTodoAction,
  saveNseTodoAction,
  addTodoAction,
} from "../actions/setNewTodo_action";
import NewTodo from "../components/NewTodo";

const mapStateToProps = (state) => {
  console.log("statenew", state);
  return {
    text: state.text,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickCancel: () => dispatch(cancelNewTodoAction()),
  onClickSave: () => dispatch(saveNseTodoAction()),
  onClickConcent: (content) => dispatch(addTodoAction(content)),
});

const MyNewTodo = connect(mapStateToProps, mapDispatchToProps)(NewTodo);

export default MyNewTodo;
