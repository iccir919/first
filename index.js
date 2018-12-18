module.exports = function first(string) {
  if (typeof string !== "string") throw new TypeError("First wants a string!");
  return string.replace(/\s/g, "");
};
