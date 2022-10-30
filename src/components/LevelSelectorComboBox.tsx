import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveLevel } from "../store/renderModelSlice";


const LevelSelectorComboxBox = () => {

  const levelsArr = useAppSelector((state) => state.renderModel.levels);
  const dispatch = useAppDispatch();
  const onHover = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    // dispatch( setActiveLevel( value ) );
    console.log( "hovered over Level:" + {value} )
  };
  const handleMouseEvent = (event: React.MouseEvent<HTMLOptionElement>) => {
    const value = +event.currentTarget.value;
    console.log( "hovered over Level:" + value )
    // Do something
  };
  const handleMouseEvent2 = (event: React.MouseEvent<HTMLSelectElement>) => {
    const value = +event.currentTarget.value;
    console.log( "hovered over Level:" + value )
    // Do something
  };
  let levels = levelsArr.map( (id) =>
  {
      return (
        <option key={id} value={id} onMouseEnter={handleMouseEvent} >Level {id} </option>
      ) 
  });

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    console.log( "Selected Level:" + value )
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
