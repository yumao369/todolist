import { addId } from "../action";

const addIdRe = (state = { id: 0 }, action) => {
  switch (action.type) {
    case addId:
      return {
        ...state,
        id: state.id + 1,
      };
    default:
      return state;
  }
};

export default addIdRe;
