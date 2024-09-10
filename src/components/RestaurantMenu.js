import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestuarantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>{

    const {resId}=useParams();
    const resInfo=useRestuarantMenu(resId);
   
     

 if(resInfo===null) return <Shimmer/>;

 
 const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  
console.log(resInfo)
 
// const { Cards } =
// resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||
// resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0] || {};
// const { itemCards } = cardsPath;

let itemCards;

if (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) {
    itemCards = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
} else if (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards) {
     itemCards = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards;
 } 
else {
    itemCards = []; // Fallback if both paths are undefined
}

console.log(itemCards);

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwoMessage}</h3>
           
           <ul>
              {itemCards.map((item)=> (<li> {item.card.info.name}-{ " Rs "} {item.card.info.price/100}</li>))}  
             
                </ul>
            
        </div>
    );

};

export default RestaurantMenu;


