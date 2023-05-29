// typeof
function averageNew(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0)
  return sum / nums.length;
}
  const str = "Hello Yaroslav";
  type x = typeof str;
  type fn = typeof averageNew;

  const max: fn = (...numbers: number[] ) => Math.max(...numbers);
  max(1,2,3,4); // ok
  // max("sd"); // err
  
  type returnFn = ReturnType<typeof  average>
// typeof