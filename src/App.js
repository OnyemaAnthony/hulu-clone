import React from "react";
import './App.css';
import Header from "./componets/Header";
import Nav from "./componets/Nav";
import Results from "./componets/Results";

function App() {
  return (
    <div className="app">
        <Header/>
        <Nav/>
        <Results/>
    </div>
  );
}

export default App;
