const AddToDo = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            name="activity"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input className="form-control" type="date" name="date" id="" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">ADD</button>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
