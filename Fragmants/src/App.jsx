import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["egg", "Green vagetable", "Roti", "Sabji", "panner"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems} />

      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
