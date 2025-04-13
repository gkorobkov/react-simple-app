import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

//const getRecordsEndpoint = "https://jsonplaceholder.typicode.com/posts/";


function RenderResult() {
      const [todos, setTodos] = useState([]);
    
      useEffect(() => {
        const getTodos = async () => {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
          );
          const data = await response.json();
          console.log(data);
          setTodos(data);
        };
        getTodos();
      }, []);
    
      console.log(todos);
    
      return (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <h2>{todo.id}: {todo.name}</h2>
            </div>
          ))}
        </div>
      );
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderResult/>);
