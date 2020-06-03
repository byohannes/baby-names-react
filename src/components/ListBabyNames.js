import React from 'react';

const ListBabyNames = ({
  babyNames,
  removeName,
  addToFavorite,
}) => {
  return (
    <div className="all-Baby-Names">
      {babyNames
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((data, index) => (
          <p
            key={index}
            className={data.sex}
            onClick={() => {
              removeName(data.id);
              addToFavorite(data.id);
            }}
          >
            {data.name}
          </p>
        ))}
    </div>
  );
};
export default ListBabyNames;
