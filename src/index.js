import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const RestaurantCard = (props) => {
  const resData = props?.resData?.info;
  console.log("Res data ::", resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData?.cloudinaryImageId
        }
      />
      <h3>{resData?.name}</h3>
      <h4>Biryani, north Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
