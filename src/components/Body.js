import RestaurantCard from "./RestaurantCard";

import {useState,useEffect} from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

//State Variable - Super powerful variable 

const [listOfRestaurants,setListOfRestuarants]=useState([]);
const [filteredRestaurants,setfilteredRestuarants]=useState([])
const [searchText,setsearchText]=useState("");
//Whenever state variables update ,react triggerd a reconciliation cycle(re renders the component)

console.log("Body rendered")

useEffect(()=>{
  fetchData();

},[])

const fetchData=async () =>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


const json=await data.json();
console.log(json);
setListOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

setfilteredRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

//conditional rendering

const onlineStatus=useOnlineStatus();
if(onlineStatus===false){
  return (
    <h1>Looks like you are offline!Please check your internet connection</h1>
  )
}

    return listOfRestaurants.length===0 ? <Shimmer/>:(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 " >
            <input type="text" className="border border-solid" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
            }}/>
            <button className="px-8 bg-green-100 m-4 rounded-lg"onClick={()=>{
              console.log(searchText);
              const normalizedSearchText = searchText.toLowerCase();
            const filteredList1=listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(normalizedSearchText))
             setfilteredRestuarants(filteredList1)

                
            }}>Search</button>
          </div>

          <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() =>{
            
            const filteredList=listOfRestaurants.filter((res) => res.info.avgRating>4);
           // console.log(listOfRestaurants);
              setListOfRestuarants(filteredList)
           
          }}


          >
             Top Rated Restaurants</button>  
          </div>
         
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restuarant) => (
            <Link key={restuarant.info.id} to={"/restaurants/"+restuarant.info.id}>
            <RestaurantCard  resData={restuarant} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;