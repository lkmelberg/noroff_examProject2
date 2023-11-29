export function Search(array, query) {
  if (!query) {
    return array;
  }

  return array.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
