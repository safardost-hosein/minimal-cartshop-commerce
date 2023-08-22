import React, { useState, useContext } from "react";
import image from "../../assets/images/63e86ab4c21faa7bc0bd90dd_Logo.svg";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import LoginContext from "../../components/context/LoginContext";
import Cartcontext from "../context/cartItemContext";

function Navbar() {
  const { loginUser, setLoginUser } = useContext(LoginContext);
  const { cartItem } = useContext(Cartcontext);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const logOut = () => {
    setLoginUser(!loginUser);
  };

  return (
    <nav>
      <div className="nav-bar">
        <div className="logo">
          {" "}
          <Link to="/" element>
            <img src={image} alt="shopcart" />
          </Link>
        </div>
        <div className="nav-signIn">
          <Link to="/account">
            {" "}
            <Button>
              <i
                data-array-length={cartItem.length}
                className={`fa-solid fa-cart-shopping ${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              ></i>{" "}
              سبد خرید
            </Button>
          </Link>

          {loginUser ? (
            <Button buttonStyle="btn--primary" onClick={logOut}>
              {" "}
              خروج{" "}
            </Button>
          ) : (
            <Link to="/commerce/login">
              <Button buttonStyle="btn--primary">ورود | ثبت نام</Button>
            </Link>
          )}

          <i
            id="bars"
            className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
        <div className="nav-items">
          <div className={click ? "nav-btn active" : "nav-btn"}>
            <ul>
              <li>
                <Link to="/bestSell">
                  <Button buttonStyle="btn--sideNav">پرفروش ترین</Button>
                </Link>
              </li>
              <li>
                <Link to="/discount">
                  <Button buttonStyle="btn--sideNav">شگفت انگیزها</Button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Button buttonStyle="btn--sideNav">خانه</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
