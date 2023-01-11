import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (historyvideo = [], action) => {
  console.log(historyvideo, "gu");
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case "HISTORYADD":
      return [...historyvideo, action.payload];
    // case DELETE:
    //   return historyvideo.filter((post) => post._id !== action.payload);
    default:
      return historyvideo;
  }
};
