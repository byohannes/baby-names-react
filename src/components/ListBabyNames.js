import React from 'react';

const ListBabyNames = props => {
  
  return (
    <div className="all-Baby-Names">
      {props.babyNames
        .sort ((a, b) => (a.name>b.name)?1:-1)
        .map ((data, index) => (
          <p key={index} className={data.sex}>{data.name}</p>
        ))}
    </div>
  );
};
export default ListBabyNames;
