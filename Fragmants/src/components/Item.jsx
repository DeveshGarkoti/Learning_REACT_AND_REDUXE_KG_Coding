const Item = ({ foodItem }) => {
  return (
    <>
      <li className="list-group-item" aria-current="true">
        {foodItem}
      </li>
    </>
  );
};

export default Item;
