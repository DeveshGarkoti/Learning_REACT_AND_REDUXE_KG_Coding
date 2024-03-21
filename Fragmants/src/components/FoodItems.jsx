import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            handleBuyButton={() => console.log(`${item} Clicked`)}
            foodItem={item}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
