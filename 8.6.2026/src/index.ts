function getHighestPrice(itemArray: Item[]): Item {
  let theHighestValue: Item = { price: 0 };
  for (let i = 0; i < itemArray.length; i++) {
    if (itemArray[i].price > theHighestValue.price)
      theHighestValue = itemArray[i];
  }
  return theHighestValue;
}

type Item = {
  price: number;
};
const items: Item[] = [{ price: 24 }, { price: 32 }, { price: 2 }];

const result = getHighestPrice(items);
console.log(result)
