export function sortArrayTasks(array, sortSelector) {
  let sortedArray = [];

  switch (sortSelector) {
    case "new":
      sortedArray = array.sort((a, b) => (a.id > b.id ? -1 : 1));
      break;
    case "old":
      sortedArray = array.sort((a, b) => (a.id > b.id ? 1 : -1));
      break;
    case "first letter":
      sortedArray = array.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
      break;
    case "last letter":
      sortedArray = array.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
      );
      break;
  }

  return sortedArray;
}
