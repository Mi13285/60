sortme = function (names) {
  return names.sort((a, b) => a.localeCompare(b));
};
console.log(sortme(["Hello", "there", "I'm", "fine"]));
