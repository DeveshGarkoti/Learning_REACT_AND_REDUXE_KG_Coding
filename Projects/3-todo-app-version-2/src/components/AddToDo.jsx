import { FaPlus } from "react-icons/fa";
import styles from "./AddToDo.module.css";
import { useRef } from "react";
import { useContext } from "react";
import TodoItemsContext from "../store/Todo-items-store";

const AddToDo = () => {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };

  return (
    <>
      <form action="" className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            className={`${styles.inputWidth} form-control`}
            type="text"
            name="activity"
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input
            ref={todoDateElement}
            className={`${styles.inputWidth} form-control`}
            type="date"
            name="date"
            id=""
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <FaPlus />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddToDo;
