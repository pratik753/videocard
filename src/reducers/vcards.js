import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (vcards = [], action) => {
  // console.log(vcards);
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...vcards, action.payload];
    case UPDATE:
      return vcards.map((post) =>
        vcards._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return vcards.filter((post) => post._id !== action.payload);
    default:
      return vcards;
  }
};
