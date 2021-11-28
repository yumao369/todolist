import { connect } from "react-redux";
import { setNewTodoAction } from "../actions/setNewTodo_action";
import Todo from "../pages/Todo";

const mapStateToProps = (state) => {
  console.log("statetodo", state);
  return {
    text: state.text,
    todoList: state.content,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickNew: () => dispatch(setNewTodoAction()),
});

const myTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default myTodo;
