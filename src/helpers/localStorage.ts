const saveInLocalStorage = (key: string, value: any): void => {
  let itemsArray: any[] = [];
  const item: string | null = localStorage.getItem(key);
  if (item) {
    itemsArray = JSON.parse(item);
  }
  itemsArray.push(value);
  localStorage.setItem(key, JSON.stringify(itemsArray));
};
export default saveInLocalStorage;
