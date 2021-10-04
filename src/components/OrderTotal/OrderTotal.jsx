import React from "react";
import './OrderTotal.scss';
import i30n from "../../assets/img/i30n.png";

const OrderTotal = () => {
  return (
    <div className='total'>
      <div className='total__info'>
        <h2 className='info__carname'>Hyndai, i30 N</h2>
        <div className='info__license-plate'>K 761 HA 73</div>
        <h3 className='info__details'>
          <span className='info__details_bold'>Топливо </span>100%
        </h3>
        <h3 className='info__details'>
          <span className='info__details_bold'>Доступна с </span>12.06.2019 12:00
        </h3>
      </div>
      <div className='total__car-picture'>
        <img src={i30n} alt="Selected car" />
      </div>
    </div>
  );
};

export default OrderTotal;
