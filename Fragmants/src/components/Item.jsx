const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <>
      <li className="list-group-item" aria-current="true">
        {foodItem}
        <button className="btn btn-outline-info" onClick={handleBuyButton}>
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
