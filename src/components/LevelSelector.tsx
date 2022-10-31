import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveLevel } from "../store/renderModelSlice";


const LevelSelector = () => {
  const levelsArr = useAppSelector((state) => state.renderModel.levels);
  const dispatch = useAppDispatch();
  const activeLevel = useAppSelector( (state) => state.renderModel.activeLevel )
  const [hoverId, setHoverId] = useState<number|undefined>(undefined);
  //let  useState(0);

  const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = +event.currentTarget.value;
    console.log( "hovered over Level:" + value )
    setHoverId(value);
    // Do something
  };

  const selectChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = +event.currentTarget.value;
    console.log( "Selected Level:" + value )
    dispatch( setActiveLevel( value ) );
  };

  const handleMouseLeaveEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log( "LeaveEvent" )
    setHoverId(undefined);
  };

  let levels = levelsArr.map( (id) =>
  {
      let className = id === hoverId ?  "hoveredLevel" : "notSelectedLevel";
      className = id === activeLevel ?  "selectedLevel" : className;

      return (
        <button key={id} 
          value={id} 
          onClick={selectChange} 
          onMouseEnter={handleMouseEvent}
          onMouseLeave={handleMouseLeaveEvent} 
          className={className}> Level {id} </button>
      )  
  });

  return (
    <>
      Choose upper Level:
      <br/>
      {levels}
    </>
  );
};

export default LevelSelector;

// export default memo(TextWall, arePropsEqual);
