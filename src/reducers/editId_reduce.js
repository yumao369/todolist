import { editId } from "../action";

const editIdRe = (state = { id: 0 }, action) => {
  switch (action.type) {
    case editId:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
};

export default editIdRe;
