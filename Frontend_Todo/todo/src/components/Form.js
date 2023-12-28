// Form.js
import axios from 'axios';
import React, { useEffect } from 'react';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const addTodo = (data) => {
        const originalTodos = [...todos];
        axios.post("http://127.0.0.1:8000/todos/", data)
          .then(res => {
            setTodos([...originalTodos, res.data]); // Update state with the response data
            setInput(""); // Clear the input field
          })
          .catch(err => {
            console.error('Error adding todo:', err);
            setTodos(originalTodos);
          });
      };
      

  const updateTodo = (title, id, completed) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: title, completed } : todo
    );

    axios.patch(`http://127.0.0.1:8000/todos/${id}/`, { task: title, completed })
      .then(res => {
        setTodos(updatedTodos);
      })
      .catch(err => {
        console.error('Error updating todo:', err);
      });

    setEditTodo(""); // Clear edit mode
    setInput(""); // Clear the input field
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.task);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      const newTodo = { task: input, completed: false };
      addTodo(newTodo);
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder='Enter a Todo...'
        className='task-input'
        value={input}
        required
        onChange={onInputChange}
      />
      <button className='button-add' type='submit'>
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
