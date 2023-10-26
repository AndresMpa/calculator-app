let floatingPoint = true;
let string = "";

const operation = {
  0: (value) => {
    string === "" ||
    (!isFinite(string.charAt(string.length - 1)) && !string.includes("."))
      ? (string += value + ".")
      : (string += value);
  },
  1: (value) => (string += value),
  2: (value) => (string += value),
  3: (value) => (string += value),
  4: (value) => (string += value),
  5: (value) => (string += value),
  6: (value) => (string += value),
  7: (value) => (string += value),
  8: (value) => (string += value),
  9: (value) => (string += value),
  "+": () => {
    string === "" || !isFinite(string.charAt(string.length - 1))
      ? (string = string)
      : (string += "+");
    floatingPoint = true;
  },
  "-": () => {
    string === "" || !isFinite(string.charAt(string.length - 1))
      ? (string = string)
      : (string += "-");
    floatingPoint = true;
  },
  x: () => {
    string === "" || !isFinite(string.charAt(string.length - 1))
      ? (string = string)
      : (string += "*");
    floatingPoint = true;
  },
  "/": () => {
    string === "" || !isFinite(string.charAt(string.length - 1))
      ? (string = string)
      : (string += "/");
    floatingPoint = true;
  },
  ".": () => {
    if (string === "" || !isFinite(string.charAt(string.length - 1))) {
      string += "0.";
    } else if (floatingPoint) {
      string += ".";
      floatingPoint = false;
    }
  },
  "=": () => {
    string = `${eval(string)}`;
  },
  del: () => {
    string = string.slice(0, -1);
  },
  reset: () => (string = ""),
};

const registerCalc = (value, target) => {
  try {
    operation[value.toLowerCase()](value);
  } catch (error) {}

  string === "" ? (target.textContent = "0") : (target.textContent = string);
};

export { registerCalc };
