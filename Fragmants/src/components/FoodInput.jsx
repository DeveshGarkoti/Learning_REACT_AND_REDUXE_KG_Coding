const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        className="form-control mb-5 mt-2"
        placeholder="Enter food items here"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default FoodInput;
