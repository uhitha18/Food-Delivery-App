import { CDN_URL } from "../utils/constants";
import {Link} from "react-router-dom"
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
      
      <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="rest-image"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{avgRating}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
      
    );
  };

  export default RestaurantCard;
  