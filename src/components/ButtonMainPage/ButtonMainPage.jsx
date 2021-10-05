import React from 'react';
import './ButtonMainPage.scss'

const ButtonMainPage = ({ className, title, openModal }) => {
  return <button className={className} onClick={openModal}>{title}</button>
};

export default ButtonMainPage;