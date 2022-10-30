import React from "react";
import ActiveLevelPrinter from "./ActiveLevelPrinter";
import LevelSelectorComboxBox from "./LevelSelectorComboBox";

const App = () => {
    return (
      <>
        <h1>Command with LevelSelect</h1>
        <LevelSelectorComboxBox/>
        <p/>
        <ActiveLevelPrinter/>
      </>
    );
  };
  
  export default App;