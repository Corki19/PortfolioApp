import './Css/App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react";
import Phone from './Phone/Phone';
import VideoPage from './VideoPage';
import Weather from './Projects/Weather/Weather'
import Todo from './Projects/Todo/TodoApp'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Phone />}></Route>
          <Route path='/video' element={<VideoPage />}></Route>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/todo' element={<Todo />}/>

        </Routes>
      </Router>




    </div>

  );
}

export default App;
