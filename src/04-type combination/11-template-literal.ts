// template literal
export {}
// css
type Side = "top" | "right" | "bottom" | "left"
type Margin = `margin-${Side}`
type Padding = `padding-${Side}`
// camelCase for JS
type MarginJS = `margin${"" | Capitalize<Side>}`
type PaddingJS = `padding${Capitalize<Side>}`
// we have Lowercase, Uppercase, Uncapitalize


type Direction = "down" | "left"| "right"| "up";
type Position = "top" | "bottom";
type Entry = "in" | "out";
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<"" | Direction | Position>}`;

interface Car {
  brand: string,
  model: string,
  year: number,
}

type CarFactory = {
  [K in  keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}

type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

// border-style
type BorderStyle = `${Style} ${Lowercase<Color>}`
// Lowercase - сделает все строки маленькими
// type BorderStyle = `${Style} ${Uncapitalize<Color>}`
//  Uncapitalize - сделает первую букву маленькой
let borderStyle: BorderStyle = 'solid red';
let borderStyle2: BorderStyle = 'dashed white';


// template literal
