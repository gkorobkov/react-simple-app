import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

//const getRecordsEndpoint = "https://jsonplaceholder.typicode.com/posts/";


function RenderResult() {
      const [todos, setTodos] = useState([]);
      //const [todos, setTodos] = useState([]);
    
      useEffect(() => {
        const getTodos = async () => {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=2'
          );
          
          const data = await response.json();
          console.log('1');
          console.log(data);
          setTodos(data);
        };
        getTodos();
      }, []);
    
      console.log('2');
      console.log(todos);
    
      return (
        <div>
          {
          todos ? (todos.map((todo) => (<div key={todo.id}><h3>{todo.id}: </h3></div>))) : (<h2>Loading...</h2>)
          }
        </div>
      );
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RenderResult/>);
