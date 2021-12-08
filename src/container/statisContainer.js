import { connect } from "react-redux";
import Statis from "../pages/Statistics";

const mapStateToProps = (state) => {
  return {
    todoList: state.content,
  };
};

const MyStatis = connect(mapStateToProps)(Statis);

export default MyStatis;
