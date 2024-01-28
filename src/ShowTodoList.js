import React from "react";
import Item from "./Item";

export const ShowTodoList = ({ todoList, handleDeleteTodo }) => {
  return (
    <ul className="list-group mt-3">
      {todoList.map((data, index) => (
        <Item data={data} index={index} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </ul>
  );
}

export default ShowTodoList;
