import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    // setTodos(todos.filter((todo) => todo.id !== id));

    console.log(id)
    // axios.delete("https://ravirajnavale-mock-server-app.onrender.com/todo/"+todos.id)
    // .then((response) => {
    //     console.log(response)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
  };

  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
        if(item.id === todo.id){
            return {...item, completed: !item.completed}
        }
        return item;
    }));
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

//   axios.get("https://ravirajnavale-mock-server-app.onrender.com/todo")
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <IoCheckmarkDoneCircle />
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <FaEdit />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
