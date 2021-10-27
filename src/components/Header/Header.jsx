import React from "react";
import "./Header.scss";
import { ReactComponent as LocationIcon } from "../../assets/icons/location-icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { selectedCity } = useSelector(state => state.locationReducer)
  return (
    <>
      <div>
        <Link to='/car-sharing-project'>
          <h2 className="header__brand-name brand-name">Need for drive</h2>
        </Link>
      </div>
      <div className="location">
        <LocationIcon className="location__icon" />
        <p className="location__city">{selectedCity}</p>
      </div>
    </>
  );
};

export default Header;
