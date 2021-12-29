import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ordersummary from './Ordersummary';
import Update from './Update';
import Login from './Login';
import React from "react";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path = '/summary' element = {<Ordersummary/>}/>
        <Route path = '/update' element = {<Update/>}/>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
