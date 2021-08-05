import React, {useState} from "react";
import './App.css';
import Header from "./componets/Header";
import Nav from "./componets/Nav";
import Results from "./componets/Results";
import request from "./request";

function App() {
    const [selectedOption,setSelectedOption]= useState(request.fetchTrending);
  return (
    <div className="app">
        <Header/>
        <Nav setSelectedOption={setSelectedOption}/>
        <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
