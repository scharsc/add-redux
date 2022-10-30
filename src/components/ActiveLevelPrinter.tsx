import React from "react";
import { useAppSelector } from "../store/hooks";

const ActiveLevelPrinter = () => {
    const activeLevel = useAppSelector((state) => state.renderModel.activeLevel);
    return (
      <>
        <p/>
        ActiveLevel is: {activeLevel}
      </>
    );
  };
  
  export default ActiveLevelPrinter;