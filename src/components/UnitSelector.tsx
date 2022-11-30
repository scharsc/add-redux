import React, { useEffect, useState } from "react";
import { localize } from "../localize";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveLevel } from "../store/renderModelSlice";
import { AllLengthUnits, LengthUnit, lengthUnitTranslationKey } from "../units";


const UnitSeletor = () => {

  var allUnits = AllLengthUnits;

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    console.log( "Selected unit:" + value );
  };

  let units = allUnits.map( (unit) =>
  {
      var unitStr = localize( lengthUnitTranslationKey( unit ) );
      return (
        <option key={unit} value={unit} > { unitStr } </option>
      ) 
  });
  var selectedUnit: LengthUnit = "cm";

  return (
    <>
      <br/>
      <select name="Length Unit" id="length unit select" 
      onChange={selectChange} value={selectedUnit}> 
        {units}
      </select>
    </>
  );
};

export default UnitSeletor;

// export default memo(TextWall, arePropsEqual);
