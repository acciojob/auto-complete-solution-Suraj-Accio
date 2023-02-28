
import React from "react";
import './../styles/App.css';
import Autocomplete from "./AutoComplete";

const suggestions = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  return (
    <div>
      <Autocomplete suggestions={suggestions}/>
    </div>
  )
}

export default App
