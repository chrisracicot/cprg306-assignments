import Item from "./item";

export default function ItemList(props) {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <main>
      <div className="max-w-sm p-2 pl-4 bg-white m-3 text-black">
        <Item
          name={item1.name}
          quantity={item1.quantity}
          category={item1.category}
        />
      </div>

      <div className="max-w-sm p-2 pl-4 bg-orange-500 m-3 text-black">
        <Item
          name={item2.name}
          quantity={item2.quantity}
          category={item2.category}
        />
      </div>

      {/* <Item item1={item1.name} />
      <Item props={item2.name} />
      <Item props={item3} />
      <Item props={item4} />
      <Item props={item5} />
      <Item props={item6} />
      <Item props={item7} />
      <Item props={item8} />
      <Item props={item9} />
      <Item props={item10} />
      <Item props={item11} />
      <Item props={item12} />  */}
    </main>
  );
}
