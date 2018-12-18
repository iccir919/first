module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("First wants a string!");
  return string.replace(/\s/g, "");
};
