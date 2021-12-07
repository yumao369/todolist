import { connect } from "react-redux";
import Status from "../components/Status";

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    text: state.text,
    todoList: state.content,
    selectDate: state.selectDate.date,
  };
};

const MyStatus = connect(mapStateToProps)(Status);

export default MyStatus;
