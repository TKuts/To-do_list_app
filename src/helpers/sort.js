export function sortArrayTasks(array, sortSelector) {
  let sortedArray = [];

  if (sortSelector === "new") {
    sortedArray = array.sort((a, b) => (a.id > b.id ? -1 : 1));
  }
  if (sortSelector === "old") {
    sortedArray = array.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  if (sortSelector === "first letter") {
    sortedArray = array.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
  }
  if (sortSelector === "last letter") {
    sortedArray = array.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
    );
  }

  return sortedArray;
}
