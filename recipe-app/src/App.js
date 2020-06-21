import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = "67551386";
  const APP_KEY = "06025c993e389c42f70c39f164e00bf5";

  const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  return(
    <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-btn" type="submit">Search</button>
    </form>
    </div>
  );
}

export default App;
