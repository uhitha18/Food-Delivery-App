import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
 const Header=()=>{

    let btnName="Login";
    const [btnNameReact,setBtnNameReact]=useState("Login");

    //If no dependency array useEffect is called on every render
    //If dependency array is empty =[] then useeffect is called only on initial render
  //If dependency array has some value then useeffect is called everytime the value inside dependency array changes 
const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg ">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 space-x-1">

                    <li className="px-4">
                        {onlineStatus ? "Online" :"Offline"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link></li>
                    <li className="px-4">
                         <Link to="/contact">Contact Us</Link></li>
                         <li className="px-4">
                            <Link to="/grocery">Grocery</Link>
                         </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() =>{
                       btnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login");
                        console.log(btnNameReact)

                     } }>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
    
    }
    
export default Header;
