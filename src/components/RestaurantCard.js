import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resData = props?.resData?.info;
  //   console.log("Res data ::", resData);
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + resData?.cloudinaryImageId} />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <h4>{resData?.avgRating}</h4>
      <h4>{resData?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
