export const AllLengthUnits = ["mm", "cm", "m"] as const;
export type LengthUnit = (typeof AllLengthUnits)[number];

const mapLengthUnitToScaleFactor: Map<LengthUnit, number> = new Map( [
    [ "mm", 0.001 ],
    [ "cm", 0.01 ],
    ["m", 1.0],
    //[ "pc", 2.344] /* illigal */
    ]
 )

const mapLengthUnitToLocalizationKey: Map<LengthUnit, string> =new Map( [
    ["mm", "UNIT_MM"],
    ["cm", "UNIT_CM"],
    ["m", "UNIT_M"]
]);

const throwUnitNotInMap = () => {
  throw new Error("The given unit is not in the map");
}

export const scaleToMeter = (sourceUnit: LengthUnit) => mapLengthUnitToScaleFactor.get( sourceUnit )?? throwUnitNotInMap();
export const lengthUnitTranslationKey = (sourceUnit: LengthUnit) => mapLengthUnitToLocalizationKey.get( sourceUnit ) ?? throwUnitNotInMap();