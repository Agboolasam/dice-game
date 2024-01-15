let value1;
let value2;

// function to generate random number
function getRandom() {
  let num = Math.ceil(Math.random() * 6);

  return num;
}

function genNum() {
  value1 = getRandom();
  console.log("run1");
  value2 = getRandom();
  console.log("run2");

  //   console.log(value1 + value2);
  //   console.log(value1);
  //   console.log(value2);
}

export { value1, value2, genNum };
