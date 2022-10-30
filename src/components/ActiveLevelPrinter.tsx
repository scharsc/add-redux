import React from "react";
import { useAppSelector } from "../store/hooks";

const ActiveLevelPrinter = () => {
    const activeLevel = useAppSelector((state) => state.renderModel.activeLevel);
    return (
      <>
        <h1>3D Rendering</h1>
        <p/>
        ActiveLevel is: {activeLevel}
      </>
    );
  };
  
  export default ActiveLevelPrinter;