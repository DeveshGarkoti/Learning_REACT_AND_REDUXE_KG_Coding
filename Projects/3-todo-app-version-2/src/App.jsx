import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomMessage from "./components/WelcomMessage";
import TodoItemsContextProvider from "./store/Todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="container">
          <AppName />
          <AddToDo />
          <WelcomMessage />
          <TodoItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
