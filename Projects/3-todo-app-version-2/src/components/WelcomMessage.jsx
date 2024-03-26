import { useContext } from "react";
import TodoItemsContext from "../store/Todo-items-store";

const welcomMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length <= 0 && <div>Have a good day</div>;
};

export default welcomMessage;
