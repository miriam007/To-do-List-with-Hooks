import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Typography } from '@material-ui/core';

const App = () => {
  const [ todos, addTodo, deleteTodo ] = useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">To Do List</Typography>
      <TodoForm 
        // saveTodo={console.warn}
        saveTodo= {todoText => {
          const trimmedText = todoText.trim();
            
          if (trimmedText.length >0) {
            addTodo(trimmedText);
          }}
           }
          />
      <TodoList todos={todos} deleteTodo={deleteTodo} />

      </div>
  );
};

export default App;

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
