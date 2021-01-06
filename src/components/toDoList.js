import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const todos = useSelector((state) => state.ToDoReducer);
  return (
    <div className="center_list ">
      <p>
        {todos.map((el) => (
          <ToDoItem key={el.id} todo={el} />
        ))}
      </p>
   </div>
  );
};

export default ToDoList;
// export default connect(mapStoreToProps, mapDispatchToProps)(ToDoList)
