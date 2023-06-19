function reverse(yes) {
  let result = yes.split(" ");

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "") {
      result.splice(i, 1);
      i--;
    }
  }

  result = result.map((element) => element.split("").reverse().join(""));
  return result.join(" ");
}

reverse("seif                  eddine  krimi              ");

export { reverse };
