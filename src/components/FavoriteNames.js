import React from 'react';

const FavoriteNames = ({
  favoritesNames,
  removeFavoriteName,
  addFavoriteNameToList,
}) => {
  return (
    <div className="favorite">
      Favorite Names:
      {favoritesNames.map((babyInfo, index) => (
        <p
          className={babyInfo.sex}
          key={index}
          onClick={() => {
            removeFavoriteName(babyInfo.id);
            addFavoriteNameToList(babyInfo.id);
          }
        }
       >
          {babyInfo.name}
        </p>
      ))}
    </div>
  );
};

export default FavoriteNames;
