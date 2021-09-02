import React from 'react';
import './OrderTabs.scss';

const OrderTabs = () => {
  return (
    <ul className='tabs'>
      <li className='tabs__item'>Местоположение</li>
      <li className='tabs__item'>Модель</li>
      <li className='tabs__item'>Дополнительно</li>
      <li className='tabs__item'>Итого</li>
    </ul>
  )
}

export default OrderTabs;