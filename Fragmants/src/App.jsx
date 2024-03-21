import "./App.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["egg", "Green vagetable", "Roti", "Sabji", "panner"];

  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          consequatur cumque eius optio. Maiores tempore saepe aperiam sunt nemo
          vero qui placeat ipsum totam assumenda magni, enim consequatur
          mollitia ad.
        </p>
      </Container> */}
    </>
  );
}

export default App;
