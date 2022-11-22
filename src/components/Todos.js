import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removeTodo } from "../redux/todoapp/action";

export const Todos = ({handleEditClick,editFromVisibility}) => {
    const dispatch =useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <input type="checkbox" checked={todo.completed}></input>
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box" style={{ dispaly:'flex',width:'100%'}}>
        <span onClick={()=>handleEditClick(todo)}>
          <Icon icon={edit2} />
        </span>
        <span onClick={() => dispatch(removeTodo(todo.id))}>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  ));
};
