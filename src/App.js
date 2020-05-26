import React from 'react';
import babyNamesData from './babyNamesData.json';
import ListBabyNames from "./components/ListBabyNames";
import "./App.css";
const App = () => {
  return  (
      <div className="container">
    <input className="search-input" placeholder="Search baby names..."></input> 
    <hr className="horizontal-line"></hr>
    <ListBabyNames babyNames = {babyNamesData}/>
    <hr className="horizontal-line"></hr>
    </div>
  );
}
export default App;
