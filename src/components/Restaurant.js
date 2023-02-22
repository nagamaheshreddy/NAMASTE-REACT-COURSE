import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCdnUrl } from "../constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.4939846&lng=78.40226349999999&menuId=" +
        id
    );
    const restaurantData = await response.json();
    setRestaurantMenu(restaurantData.data);
    console.log(restaurantData);
  }

  if (!restaurantMenu) {
    return <ShimmerUI />;
  }

  return (
    <div className="Menu">
      <div>
        <h2>Restaurant id : {id}</h2>
        <h3>{restaurantMenu.name}</h3>
        <img src={imageCdnUrl + restaurantMenu.cloudinaryImageId}></img>
        <h4>{restaurantMenu.area}</h4>
        <h4>{restaurantMenu.name}</h4>
        <h4>{restaurantMenu.avgRating}</h4>
      </div>
      <div>
        {Object.values(restaurantMenu?.menu?.items).map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
