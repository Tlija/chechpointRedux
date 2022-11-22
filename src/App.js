import { Form } from "./components/Form";
import "./App.css";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/action";
import { useState } from "react";
function App() {
  const [editTodo,setEditTodo]=useState('');
  const dispatech = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFromVisibility, seteditFromVisibility] = useState(false);
  const handleEditClick = (todo) => {
    seteditFromVisibility(true);
      setEditTodo(todo)
  };
  const cancelUpdate=()=>{
    seteditFromVisibility(false);
  }
  return (
    <div className="wrapper">
      <br />
      <br />
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFromVisibility={editFromVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate} />
      <Todos
        handleEditClick={handleEditClick}
        editFromVisibility={editFromVisibility}
      />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md delete-all "
          onClick={() => dispatech(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
