import { connect } from "react-redux";
import { newTodoTypeAction, setNewTodoAction } from "../action";
import Todo from "../pages/Todo";

const mapStateToProps = (state) => {
  console.log("statetodo", state);
  return {
    text: state.text,
    todoList: state.content,
    selectDate: state.selectDate.date,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickNew: () => dispatch(setNewTodoAction()),
  onclickNewType: () => dispatch(newTodoTypeAction()),
});

const myTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default myTodo;
