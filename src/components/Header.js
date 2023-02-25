import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header" style={{ backgroundColor: "lightskyblue" }}>
      <img
        className="logo"
        alt="Food Villa"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      ></img>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/cart">CART : {cartItems.length}</Link>
          </li>
        </ul>
        {loggedIn ? (
          <button onClick={() => setLoggedIn(false)}>LOGIN</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>LOGOUT</button>
        )}
      </div>
    </div>
  );
}

export default Header;
