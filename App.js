   // App.js
   import React from 'react';
   import { useState } from 'react';

   export default function App() {
     return (
       <>
       <h1>Hello, World! 13</h1>
       <div>
         <h2>Welcome to my app. v3</h2>
         <MyButton />
       </div>
       <div>
         <Profile />
       </div>
       <ShoppingList />
       <MyButton />
       </>       
     );
   }

   function MyButton() {
    const [count, setCount] = useState(0);
    
    function handleClick() {
      //alert('You clicked me!');
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Click me. Clicked {count} times
      </button>
    );
  }
  
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  function Profile() {
    return (
      <>
        <h1>Profile: {user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }