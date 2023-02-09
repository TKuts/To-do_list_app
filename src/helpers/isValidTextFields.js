export function isValidTextFields(firstValue, secondValue) {
  let message;
  if (firstValue === "" && secondValue === "") {
    return (message = "Sorry, but you didn't enter Title and Description");
  }
  if (firstValue === "") {
    return (message = "Please, enter Title");
  }
  if (secondValue === "") {
    return (message = "Please, enter Descroption");
  }

  if (secondValue.length <= 3) {
    return (message = "Please, enter a longer description ");
  }

  return (message = "OK");
}
