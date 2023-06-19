const myObject = {
  add: function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      return "error ,check ur entries";
    }
  },
  sub: function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x - y;
    } else {
      return "error ,check ur entries";
    }
  },
  mult: function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x * y;
    } else {
      return "error ,check ur entries";
    }
  },
  div: function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x / y;
    } else {
      return "error ,check ur entries";
    }
  },
};
export { myObject };
