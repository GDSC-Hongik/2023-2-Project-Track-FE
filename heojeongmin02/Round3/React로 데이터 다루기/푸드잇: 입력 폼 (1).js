import { useState } from "react";

function FoodForm() {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState(0);
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCalorieChange = (e) => {
    const nextCalorie = Number(e.target.value);
    setCalorie(nextCalorie);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className="FoodForm">
      <input value={title} onChange={handleTitleChange}></input>
      <input
        type="number"
        value={calorie}
        onChange={handleCalorieChange}
      ></input>
      <input value={content} onChange={handleContentChange}></input>
    </form>
  );
}

export default FoodForm;
