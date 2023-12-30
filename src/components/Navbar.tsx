import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navBar">
      <img src="../../public/images/M-image.png" alt="gg" />
      <div>
        {/* <span className="imageSpan">
          You're one stop to man's image up date onling store
        </span> */}
      </div>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="ShoppingCart"
      ></FontAwesomeIcon>
      <samp
        className="ShoppingCartCount"
        onClick={() => {
          navigate("/cart");
        }}
      >
        9
      </samp>
    </nav>
  );
};

export default Navbar;
