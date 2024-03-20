import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
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
