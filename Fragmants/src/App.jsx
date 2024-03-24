import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let [foodItems, setFoodItems] = useState([
    "egg",
    "Green vagetable",
    "Roti",
    "Sabji",
  ]); // create a state variable

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfoodItem = event.target.value;
      let newItems = [...foodItems, newfoodItem];
      event.target.value = "";
      setFoodItems(newItems);
    }
  };

  

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
