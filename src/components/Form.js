import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addTodo,handleEditSubmit } from "../redux/todoapp/action";
export const Form = ({ editFromVisibility, editTodo,cancelUpdate }) => {
  const dispatech = useDispatch();

  const [editValue, seteditValue] = useState("");
  const [todoValue, setTodoValue] = useState("");
  useEffect(() => {
    seteditValue(editTodo.todo);
  }, [editTodo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();

    let todoObj = {
      id: "time",
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatech(addTodo(todoObj));
  };
  const editSubmit=(e)=>{
    e.preventDefault();
    let editedObj={
        id:editTodo.id,
        todo: editValue,
        completed:false
    }
    dispatech(handleEditSubmit(editedObj))
  }
  return (
    <>
      {editFromVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-md" style={{ }}>
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label>Updat your todo-items</label>
          <div className="input-and-btn">
            <input type="text" className="form-control" required value={editValue } onChange={(e)=>seteditValue(e.target.value)} />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </div>
          <button type="button" className="btn btn-primary btn-md back-btn" 
          onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </>
  );
};
