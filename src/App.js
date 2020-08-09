import React from 'react';
import MainPage from "./pages/MainPage"
import EmployeesTable from "./components/EmployeesTable"; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <EmployeesTable/>
    </div>
  );
}

export default App;
