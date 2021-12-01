import { selectDate } from "../action";
import * as moment from "moment";
const today = new Date();

const selectDateRe = (
  state = { date: moment(today).format("yyyy-MM-DD") },
  action
) => {
  switch (action.type) {
    case selectDate:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default selectDateRe;
