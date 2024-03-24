const Item = ({ foodItem, active, handleBuyButton }) => {
  return (
    <>
      <li
        className={`${active && "active"}  list-group-item`}
        aria-current="true"
      >
        {foodItem}
        <button className="btn btn-info " onClick={handleBuyButton}>
          {active ? "Remove" : "Buy"}
        </button>
      </li>
    </>
  );
};

export default Item;
