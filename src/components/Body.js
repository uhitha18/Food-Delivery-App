import RestaurantCard from "./RestaurantCard";

import {useState,useEffect} from "react"

const Body = () => {

//State Variable - Super powerful variable 

const [listOfRestaurants,setListOfRestuarants]=useState([]);

useEffect(()=>{
  fetchData();

},[])

const fetchData=async () =>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


const json=await data.json();
console.log(json);
setListOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

if(listOfRestaurants.length===0){
  return <h1>Loading....</h1>
}

console.log("Body rendered")

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() =>{
            
            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating>4);
           // console.log(listOfRestaurants);
              setListOfRestuarants(filteredList)
           
          }}
          >
             Top Rated Restaurants</button>
        </div>
        <div className="restro-container">
          {listOfRestaurants.map((restuarant) => (
            <RestaurantCard key={restuarant.info.id} resData={restuarant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;