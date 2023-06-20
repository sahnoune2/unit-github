const letterToNumber = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};
function maybe(elements) {
  let take = letterToNumber[elements];
  let enc = (take + 1) % 26;
  for (let key in letterToNumber) {
    if (letterToNumber[key] === enc) {
      return key;
    }
  }
}

function cesar(word) {
  if (word === "") {
    return "u didnt enter anything";
  }
  let result = word.split(" ");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "") {
      result.splice(i, 1);
      i--;
    }
  }

  result = result.map((element) => {
    let array = element.split("");
    const newarray = array.map((elements) => {
      const transformed = maybe(elements);
      return transformed;
    });
    return newarray.join("");
  });
  return result.join(" ");
}
console.log(cesar(""));

export { cesar };
