let string = "";
const operation = {
  0: (value) => (string += value),
  1: (value) => (string += value),
  2: (value) => (string += value),
  3: (value) => (string += value),
  4: (value) => (string += value),
  5: (value) => (string += value),
  6: (value) => (string += value),
  7: (value) => (string += value),
  8: (value) => (string += value),
  9: (value) => (string += value),
  "+": () => (string += "+"),
  "-": () => (string += "-"),
  x: () => (string += "*"),
  "/": () => (string += "/"),
  ".": () => (string += "."),
  "=": () => eval(string),
  "del": () => (string = string.slice(0, -1)),
  reset: () => (string = ""),
};

const registerCalc = (value, target) => {
  operation[value](value);
  target.textContent = string;
};

export { registerCalc };
