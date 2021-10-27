import React from 'react';
import './ButtonMainPage.scss'

const ButtonMainPage = ({ className, text, openModal }) => {
  return <button className={className} onClick={openModal}>{text}</button>
};

export default ButtonMainPage;