import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <center className="container">
        <AppName />
        <div className="items-container ">
          <AddToDo />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App;
