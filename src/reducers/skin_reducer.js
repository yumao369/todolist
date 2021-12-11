import { changeSkin } from "../action";

const setSkin = (state = { skin: "orange" }, action) => {
  switch (action.type) {
    case changeSkin:
      return {
        ...state,
        skin: action.color,
      };
    default:
      return state;
  }
};

export default setSkin;
