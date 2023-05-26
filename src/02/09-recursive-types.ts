//recursive-types
type NestedNumbers = number | NestedNumbers[];
const nums:NestedNumbers = [1,2,3, [1,2,4, [333, 1,22], ]];
// тип сам на себя ссылается и позволяет нам как тип использовать самого себя
nums.push(12, [2]);

// JSON recursive
type JSONPrimitive = string | number | boolean | null;
type JSONObject = {[k: string]:JSONValue};
type JSONArray = JSONValue[];
// в TS можно использовать type  до их обьявления
type JSONValue =  JSONPrimitive | JSONObject | JSONArray;
//recursive-types
const test = [];

function isJSON(arg: JSONValue) {};
isJSON(1);
isJSON("test");
isJSON({value: 1});
isJSON([[1,2]]);