import { salairesAll } from "./salaires.data";
import { listeSal } from "./salaires.data";

const INITIAL_STATE = {
  salaires: salairesAll,
  payroll: listeSal,
};

const salairesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_SALAIRES":
      return {
        ...state,
        salaires: action.payload,
      };
    case "ADD_SALAIRES_TO_LIST":
      return {
        ...state,
        payroll: action.payload,
      };
    default:
      return state;
  }
};

export default salairesReducer;
