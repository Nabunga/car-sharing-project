import React from 'react';
import './ButtonMainPage.scss'

const ButtonMainPage = ({ className, title }) => {
  return <button className={className}>{title}</button>
};

export default ButtonMainPage;