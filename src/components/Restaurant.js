import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCdnUrl } from "../Utils/constants";
import ShimmerUI from "./ShimmerUI";
import UseRestaurant from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantMenu = UseRestaurant(id);

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
        <h4>{restaurantMenu.avgRating}</h4>
        <h4>{restaurantMenu.name}</h4>
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
