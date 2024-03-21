import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy groceries", dueDate: "12/05/2024" },
    { name: "workout", dueDate: "13/05/2024" },
    { name: "Coding", dueDate: "18/08/2024" },
    { name: "Earning money", dueDate: "21/06/2024" },
  ];

  return (
    <>
      <center className="container">
        <AppName />
        <AddToDo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
