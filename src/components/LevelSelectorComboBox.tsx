import React from "react";


const LevelSelectorComboxBox = () => {
  let levelsArr = [1,2,3];
  let levels = levelsArr.map( (id) =>
  {
      return (
        <option key={id} value={id}>Level {id} </option>
      ) 
          
  });
  return (
    <>
      <br/>
      <select name="pets" id="pet-select">
        {levels}
      </select>
    </>
  );
};

export default LevelSelectorComboxBox;

// export default memo(TextWall, arePropsEqual);
