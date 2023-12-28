// TodosList.js
import axios from "axios";
import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
//   const handleComplete = (todo) => {
//     setTodos(
//       todos.map((item) => {
//         if (item.id === todo.id) {
//           return { ...item, completed: !item.completed };
//         }
//         return item;
//       })
//     );

//     axios.patch(`http://127.0.0.1:8000/todos/${todo.id}`, { completed: !todo.completed })
//       .catch(err => console.error(err));
//   };

  const handleComplete = (todo) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
  
    axios.patch(`http://127.0.0.1:8000/todos/${todo.id}/`, { completed: !todo.completed })
      .then(res => {
        setTodos(updatedTodos);
      })
      .catch(err => {
        console.error('Error completing todo:', err);
      });
  };
  

  const handleEdit = (todo) => {
    const findTodo = todos.find((t) => t.id === todo.id);
    setEditTodo(findTodo);
  
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, title: findTodo.title } : item
    );
  
    axios.patch(`http://127.0.0.1:8000/todos/${todo.id}/`, { title: findTodo.title })
      .then(res => {
        setTodos(updatedTodos);
      })
      .catch(err => {
        console.error('Error updating todo:', err);
      });
  };
  


//   const handleEdit = (todo) => {
//     const findTodo = todos.find((t) => t.id === todo.id);
//     setEditTodo(findTodo);

//     axios.patch(`http://127.0.0.1:8000/todos/${todo.id}`, { ...findTodo })
//       .catch(err => console.error(err));
//   };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    const originalTodos = [...todos]
    axios.delete(`http://127.0.0.1:8000/todos/${id}`)
      .catch(err => {
        console.error(err);
        setTodos(originalTodos);
      });
  };

  const handleEditTitle = (event, todo) => {
    const newTitle = event.target.value;
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, title: newTitle } : item
      )
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input 
            type='text' 
            value={todo.task} 
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => handleEditTitle(event, todo)}
          />
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)} >
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)} >
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
