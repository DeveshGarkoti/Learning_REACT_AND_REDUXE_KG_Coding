const FoodInput = () => {
  return (
    <>
      <input
        type="text"
        className="form-control mb-5 mt-2"
        placeholder="Enter food items here"
        onChange={(event) => console.log(event.target.value)}
      />
    </>
  );
};

export default FoodInput;
