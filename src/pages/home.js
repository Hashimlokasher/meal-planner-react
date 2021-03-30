import React, { useState } from "react";

function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [mealName, setMealName] = useState("");

  const breakfastMeals = ["French Toasts", "Aloo Paratha"];
  const lunchMeals = ["Biryaani", "Aloo Qeema"];
  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }
  const [option, setOption] = useState();

  function handleChange(event) {
    setOption(event.target.value);
  }
  function handleClick(e) {
    let result = "";

    if (option === "Breakfast") {
      result = getRandomItem(breakfastMeals);
    } else if (option === "Lunch") {
      result = getRandomItem(lunchMeals);
    } else {
      console.log("No Option", option);
    }

    console.log(result);
    setMealName(result);
  }
  return (
    <div>
      <h1>Meal Planner</h1>
      <div>
        <select name="option" onChange={handleChange}>
          <option value="Breakfast" defaultValue>
            Breakfast
          </option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <button onClick={handleClick}>Suggest Meal </button>
        {mealName && (
          <div>
            <p>Suggested Meal</p>
            <p>{mealName}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
