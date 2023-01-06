export function isValidTextFields(...args) {
  return [...args].every((x) => {
    if (x === "") {
      return console.error("field is empty");
    }

    if (x.length <= 2) {
      return console.error("Longer word");
    }

    if (x.length >= 25) {
      let error = "Shorter word";
      return renderError;
    }
    if (typeof x !== "string") {
      let error = "Write Text";
      return renderError();
    }
    return true;
  });
}
