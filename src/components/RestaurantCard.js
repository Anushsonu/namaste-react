import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resData = props?.resData?.info;
  //   console.log("Res data ::", resData);
  return (
    <div className="w-64 mx-5 border mb-5 hover:bg-slate-200 transform transition-transform hover:scale-95">
      <img className="h-56 w-full" src={CDN_URL + resData?.cloudinaryImageId} />
      <div className="p-4">
        <h3>{resData?.name}</h3>
        <h4>{resData?.cuisines.join(", ")}</h4>
        <h4>{resData?.avgRating}</h4>
        <h4>{resData?.sla?.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
