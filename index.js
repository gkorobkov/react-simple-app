import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
//window.React = React
//import App from './App'; 

const restEndpoint = "https://jsonplaceholder.typicode.com/posts/10";

const callRestApi = async () => {
      const response = await fetch(restEndpoint);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
      return JSON.stringify(jsonResponse);
      
      const arrayOfLists = jsonResponse.records.map(
        record => <li key={record.id}><b>{record.title}</b> </li>
      )
      return arrayOfLists;
  };
  

const root = ReactDOM.createRoot(document.getElementById("root"));
const myelement = <h1><u>These are the details of the myelement const</u></h1>;

//root.render(      <App />)
function RenderResult() {
      const [apiResponse, setApiResponse] = useState("*** now loading ***");
    
      useEffect(() => {
          callRestApi().then(
              result => setApiResponse(result));
      },[]);
    
      return(
          <div>
              <h1>React App</h1>
              <div>{apiResponse}</div>
          </div>
      );
    };

root.render(<RenderResult/>);

//https://jsonplaceholder.typicode.com/posts
