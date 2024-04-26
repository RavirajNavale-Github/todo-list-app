import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  const intialState = JSON.parse(localStorage.getItem("todos")) || [];
  // console.log(intialState)
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(intialState);
  const [editTodo, setEditTodo] = useState(null);

  // axios
  //   .get("https://ravirajnavale-mock-server-app.onrender.com/todo")
  //   .then((response) => {
  //     // console.log(response);
  //     console.log(response.data)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
