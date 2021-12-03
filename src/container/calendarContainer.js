import { connect } from "react-redux";
import { selectDateAction } from "../action";
import Calendar from "../components/Calendar";

const mapStateToProps = (state) => {
  return {
    selectDate: state.selectDate.date,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSelectDate: (date) => dispatch(selectDateAction(date)),
});

const MyCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default MyCalendar;
