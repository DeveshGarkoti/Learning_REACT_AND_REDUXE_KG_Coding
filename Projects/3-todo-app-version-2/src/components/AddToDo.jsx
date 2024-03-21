import styles from "./AddToDo.module.css";

const AddToDo = () => {
  return (
    <>
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={`${styles.inputWidth} form-control`}
            type="text"
            name="activity"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input
            className={`${styles.inputWidth} form-control`}
            type="date"
            name="date"
            id=""
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">ADD</button>
        </div>
      </div>
    </>
  );
};

export default AddToDo;
