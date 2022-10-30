import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";


const LevelSelectorComboxBox = () => {

  const levelsArr = useAppSelector((state) => state.renderModel.levels);
  const dispatch = useAppDispatch();
  let levels = levelsArr.map( (id) =>
  {
      return (
        <option key={id} value={id}>Level {id} </option>
      ) 
  });
  return (
    <>
      <br/>
      <select name="Levels" id="level-select">
        {levels}
      </select>
    </>
  );
};

export default LevelSelectorComboxBox;

// export default memo(TextWall, arePropsEqual);
