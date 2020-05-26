import React, {useState, useEffect} from 'react';
import babyNamesData from './babyNamesData.json';
import ListBabyNames from './components/ListBabyNames';
import image from './gender.png';
import './App.css';
const App = () => {
  const [names, setName] = useState ('');
  const [babyName, setBabyName] = useState ([]);

  const handleChange = (e) => {
    setName (e.target.value.toLowerCase ());
  };

  useEffect (
    () => {
      setBabyName (
        babyNamesData.filter (item => item.name.toLowerCase ().includes (names))
      );
    },
    [names]
  );
  return (
    <div className="container">
      <input
        className="search-input"
        placeholder="Search baby names..."
        onChange={handleChange}
      />
      <img className="gender-image" src={image} alt="gender"/>
      <hr className="horizontal-line"/>
      <ListBabyNames babyNames={babyName} />
      <hr className="horizontal-line" />
    </div>
  );
};
export default App;
