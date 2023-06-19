function calc(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return "error ,check ur entries";
  }
}

export { calc };
