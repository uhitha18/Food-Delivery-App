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
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>

                    <li>
                        {onlineStatus ? "Online" :"Offline"}
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link></li>
                    <li>
                         <Link to="/contact">Contact Us</Link></li>
                         <li>
                            <Link to="/grocery">Grocery</Link>
                         </li>
                    <li>Cart</li>
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
