import { useState, useEffect } from "react";
import { FETCH_URL_MENU } from "./constants";

const UseRestaurant = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(FETCH_URL_MENU + id);
    const restaurantData = await response.json();
    setRestaurantMenu(restaurantData.data);
  }

  return restaurantMenu;
};

export default UseRestaurant;
