import React from 'react';
import './App.css';
import TitlebarGridList from "./widgets/movieList";
import SimpleAppBar from "./widgets/appbar";

function App() {
  return (
    <div className="App">
        <SimpleAppBar />
        <TitlebarGridList />
    </div>
  );
}

export default App;
