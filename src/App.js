import React, {useState, useEffect} from 'react';
import babyNamesData from './babyNamesData.json';
import ListBabyNames from './components/ListBabyNames';
import image from './gender.png';
import './App.css';
const App = () => {
  const [names, setName] = useState ('');
  const [babyName, setBabyName] = useState ([]);
  const [genderOption, setGenderOption] = useState ('');

  const searchName = e => {
    setName (e.target.value.toLowerCase ());
  };
  const filterByGender = e => {
    setGenderOption (e.target.value);
  };

  useEffect (
    () => {
      setBabyName (
        babyNamesData.filter (item => item.name.toLowerCase ().includes (names))
      );
      setGenderOption (
        babyNamesData.filter (item => item.sex.includes (genderOption))
      );
    },
    [names, genderOption]
  );
  return (
    <div className="container">
      <input
        className="search-input"
        placeholder="Search baby names..."
        onChange={searchName}
      />
      <div className="radio-buttons">
        <span class="options">
          <input
            type="radio"
            name="gender"
            value="m"
            onChange={filterByGender}
          />
          <label for="male" className="gender">Male</label>
          <input
            type="radio"
            name="gender"
            value="f"
            onChange={filterByGender}
          />
          <label for="female" className="gender">Female</label>
        </span>
      </div>
      <img className="gender-image" src={image} alt="gender" />
      <hr className="horizontal-line" />
      <ListBabyNames babyNames={babyName} />
      <hr className="horizontal-line" />
    </div>
  );
};
export default App;
