import FoodList from "./FoodList";
import items from "../mock.json";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState("createdAt");
  const handleNewClick = () => setOrder("createdAt");
  const handleCalClick = () => setOrder("calorie");
  const sortedOrder = items.sort((a, b) => b[order] - a[order]);
  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleCalClick}>칼로리순</button>
      <FoodList items={items} />
    </div>
  );
}
export default App;
