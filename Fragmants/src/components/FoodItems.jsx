import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    if (!activeItems.includes(item)) {
      let newButtons = [...activeItems, item];
      setActiveItems(newButtons);
    }
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            active={activeItems.includes(item)}
            handleBuyButton={() => onBuyButton(item, event)}
            foodItem={item}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
