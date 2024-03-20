const TodoItem = () => {
  let todoName = "Learn React";
  let todoDate = "3/25/2024";

  return (
    <>
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
