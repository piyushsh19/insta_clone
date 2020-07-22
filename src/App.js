import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setposts] = useState([]);

  return (
    <div className="app">
      
      <div className="app__header">
        <img
        className ="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.pnj"
        alt="logo"
        />
      </div>
      <h1>Instagram Clone</h1>
      <Post username="Piyush" caption="Hi there" imageUrl=""/>
      <Post />
    </div>
    
  );
}

export default App;
