import React from 'react'
import Navbar from './common/Navbar/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'></Route>
        </Routes>
      
      </Router>
    </>
  )
}
