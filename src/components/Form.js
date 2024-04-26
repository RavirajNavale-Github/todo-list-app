import React, { useEffect } from "react";
import axios from 'axios';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // if (!editTodo) {
    //   setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    //   setInput("");
    // } else {
    //   updateTodo(input, editTodo.id, editTodo.completed);
    // }

    const data = event.target.todo.value;
    console.log(data)

    axios.post("https://ravirajnavale-mock-server-app.onrender.com/todo", {data})
    .then((respnse)=> {
        console.log(respnse);
        event.target.reset();
    })
    .catch((err)=> {
        console.log(err)
    })
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        name="todo"
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
