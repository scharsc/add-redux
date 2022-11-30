const localizeMap: Map<string, string> = new Map( [
  [ "UNIT_MM", "mm" ],
  [ "UNIT_CM","cm" ],
  ["UNIT_M","m"],
  //[ "pc", 2.344] /* illigal */
  ]
)

var throwException = () =>  { throw new Error(); }

export var localize = (key: string) => localizeMap.get(key) ?? throwException() ; 