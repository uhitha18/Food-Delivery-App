import { CDN_URL } from "../utils/constants";
import {Link} from "react-router-dom"
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
    return (
      
      <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{avgRating}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
      
    );
  };

  export default RestaurantCard;
  