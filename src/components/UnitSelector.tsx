import React, { useEffect, useState } from "react";
import { localize } from "../localize";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setActiveLevel } from "../store/renderModelSlice";
import { AllLengthUnits, lengthUnitTranslationKey } from "../units";


const UnitSeletor = () => {

  var allUnits = AllLengthUnits;

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    console.log( "Selected unit:" + value );
  };

  let units = allUnits.map( (id) =>
  {
      var unitStr = localize( lengthUnitTranslationKey( id ) );
      return (
        <option key={id} value={id} > { unitStr } </option>
      ) 
  });

  return (
    <>
      <br/>
      <select name="Length Unit" id="length unit select" onChange={selectChange}> 
        {units}
      </select>
    </>
  );
};

export default UnitSeletor;

// export default memo(TextWall, arePropsEqual);
