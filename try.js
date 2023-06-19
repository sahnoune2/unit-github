function check(yes) {
  if (yes.charAt(0) !== " " && yes.charAt(yes.length - 1) !== " ") {
    return yes;
  }

  if (yes.charAt(0) === " ") {
    yes = yes.slice(1);
    return check(yes);
  } else if (yes.charAt(yes.length - 1) === " ") {
    yes = yes.slice(0, yes.length - 1);
    return check(yes);
  }
}

check("    seif        ");

let you = "seif";
let maybe = you.split(" ");

for (let i = 0; i < maybe.length; i++) {
  if (maybe[i] === "") {
    maybe.splice(i, 1);
    i--;
  }
}
console.log(maybe);
