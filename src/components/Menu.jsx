import { AiOutlineMenu } from 'react-icons/ai'
import './Menu.scss';
import { useEffect, useState } from 'react';

export default function Menu({ onClickNavIcn, visible }) {

  return (
    <div className={`nav-container ` + visible}>
      <div className="start">
        <button type="button" className="menu-ico" onClick={onClickNavIcn}>
          <AiOutlineMenu />
        </button>
        <a href="/" className="wrapper">
          <h1 className="logo">유튜브</h1>
        </a>
      </div>
    </div>
  )
}