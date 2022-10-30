import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveLevel } from "../store/renderModelSlice";


const LevelSelectorComboxBox = () => {

  const levelsArr = useAppSelector((state) => state.renderModel.levels);
  const dispatch = useAppDispatch();
  let levels = levelsArr.map( (id) =>
  {
      return (
        <option key={id} value={id}>Level {id} </option>
      ) 
  });

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    dispatch( setActiveLevel( value ) );
  };
  return (
    <>
      <br/>
      <select name="Levels" id="level-select" onChange={selectChange}>
        {levels}
      </select>
    </>
  );
};

export default LevelSelectorComboxBox;

// export default memo(TextWall, arePropsEqual);
