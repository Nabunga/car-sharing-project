import React from "react";
import "./Header.scss";
import { ReactComponent as LocationIcon } from "../../assets/icons/location-icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Link to='/car-sharing-project'>
          <h2 className="header__brand-name brand-name">Need for drive</h2>
        </Link>
      </div>
      <div className="location">
        <LocationIcon className="location__icon" />
        <p className="location__city">Ульяновск</p>
      </div>
    </>
  );
};

export default Header;
