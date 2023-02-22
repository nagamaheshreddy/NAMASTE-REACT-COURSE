import { imageCdnUrl } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        className="card-image"
        src={imageCdnUrl + cloudinaryImageId}
        alt="food"
      ></img>
      <div className="card-details">
        <h2 className="card-title">{name}</h2>
        <h4 className="card-cuisine">{cuisines.join(",")}</h4>
        <h5 className="card-rating">Rating : {avgRating} &#9733; </h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
