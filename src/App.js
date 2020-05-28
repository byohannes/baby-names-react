import React, {useState} from 'react';
import babyNamesData from './babyNamesData.json';
import ListBabyNames from './components/ListBabyNames';
import image from './gender.png';
import './App.css';
const App = () => {
  const [searchTerm, setSearchTerm] = useState ('');

  const [genderOption, setGenderOption] = useState ('');

  const filteredBabyNames = babyNamesData.filter (name =>
    name.name.toLowerCase ().includes (searchTerm.toLowerCase ())
  );

  return (
    <div className="container">

      <input
        className="search-input"
        value={searchTerm}
        placeholder="Search baby names..."
        onChange={e => setSearchTerm (e.target.value)}
      />
      <button className="search-button" onClick={() => setSearchTerm ('')}>
        Clear
      </button>

      <div className="radio-buttons">

        <span className="options">
          <input
            type="radio"
            name="gender"
            value="m"
            onClick={e => {
              setGenderOption (e.target.value);
            }}
          />

          <label className="gender">Male</label>
          <input
            type="radio"
            name="gender"
            value="f"
            onChange={e => {
              setGenderOption (e.target.value);
            }}
          />
          <label className="gender">Female</label>
        </span>
      </div>

      <img className="gender-image" src={image} alt="gender" />
      <hr className="horizontal-line" />
      <ListBabyNames babyNames={filteredBabyNames} />
      <hr className="horizontal-line" />
    </div>
  );
};
export default App;
