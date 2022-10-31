import React from "react";
import ActiveLevelPrinter from "./ActiveLevelPrinter";
import LevelSelector from "./LevelSelector";
import LevelSelectorComboxBox from "./LevelSelectorComboBox";

const App = () => {
    return (
      <>
        <h1>Command with LevelSelect</h1>
        <LevelSelector/>
        <p/>
        <ActiveLevelPrinter/>
      </>
    );
  };
  
  export default App;