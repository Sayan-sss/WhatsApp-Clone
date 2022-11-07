import React, {useState} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login"
import { useStateValue } from "./StateProvider";


function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <Login />
      ):(
        <div className="app__body">
        <BrowserRouter>
          <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />}/>
              <Route path="/"element={<Chat />}/>
            </Routes>
        </BrowserRouter>
      </div>
      )}
    </div>
  );
}

export default App;
