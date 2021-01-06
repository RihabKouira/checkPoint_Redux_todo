// import { v4 as uuidv4 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from "../actions/types";
// let initialState = [
//   {
//     id: uuidv4(),
//     text: "lear redux",
//     complete: false,
//   },
//   {
//     id: uuidv4(),
//     text: "stay safe",
//     complete: false,
//   },
// ];
const TodoReducer = (state =[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    //   return [...state, action.payload]
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.payload);
    case COMPLETE_TODO:
      return state.map((el) =>
        el.id === action.payload ? { ...el, complete: !el.complete } : el
      );
    case EDIT_TODO:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );
    default:
      return state;
  }
};

export default TodoReducer;
