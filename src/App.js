import React, {useState} from 'react';
import babyNamesData from './babyNamesData.json';
import ListBabyNames from './components/ListBabyNames';
import FavoriteNames from './components/FavoriteNames';
import './App.css';
const App = () => {
  const [allBabyNames, setAllBabyNames] = useState(babyNamesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderOption, setGenderOption] = useState('');
  const [favNames, setFavNames] = useState([]);

  const filteredBabyNames = allBabyNames
    .filter((babyInfo) => babyInfo.sex === genderOption || !genderOption)
    .filter((babyInfo) =>
      babyInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const removeName = (id) => {
    setAllBabyNames(allBabyNames.filter((name) => name.id !== id));
  };

  const removeFavoriteName = (id) => {
    const removedFav = favNames.filter((name) => name.id !== id);
    setFavNames(removedFav);
  };

  const addFavoriteNameToList = (id) => {
    const removedFavorName = favNames.find((name) => name.id === id);
    setAllBabyNames([...allBabyNames, removedFavorName]);
  };
  const addToFavorite = (id) => {
    const removedName = allBabyNames.find((name) => name.id === id);
    setFavNames([...favNames, removedName]);
  };

  return (
    <div className="box">
      <input
        className="search-input"
        value={searchTerm}
        placeholder="Search baby names..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={() => setSearchTerm('')}>
        Clear
      </button>

      <div className="radio-buttons">
        <span className="options">
          <input
            type="radio"
            name="gender"
            value="m"
            onChange={(e) => {
              setGenderOption(e.target.value);
            }}
            checked={genderOption === 'm'}
          />

          <label className="m">Male</label>
          <input
            type="radio"
            name="gender"
            value="f"
            onChange={(e) => {
              setGenderOption(e.target.value);
            }}
            checked={genderOption === 'f'}
          />
          <label className="f">Female</label>
          <input
            type="radio"
            name="gender"
            value=""
            onChange={(e) => {
              setGenderOption('');
            }}
            checked={genderOption === ''}
          />
          <label className="gender">Male or Female</label>
        </span>
      </div>
      <FavoriteNames
        favoritesNames={favNames}
        removeFavoriteName={removeFavoriteName}
        addFavoriteNameToList={addFavoriteNameToList}
      />
      <hr className="horizontal-line" />
      <ListBabyNames
        babyNames={filteredBabyNames}
        removeName={removeName}
        addToFavorite={addToFavorite}
      />
      <hr className="horizontal-line" />
    </div>
  );
};
export default App;
