import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './NaviBar.scss';
import {
  faBars,
  faWarehouse,
  faShoppingBag,
  faHeart,
  faUser,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ showMenu, showLoginBar }) => {
  return (
    <div className="sidebar-nav-container">
      <section className="menu">
        <button className="side-bar-on-btn" onClick={showMenu}>
          <FontAwesomeIcon icon={faBars} className="side-bar-btn" />
        </button>
      </section>
      <section className="header-container">
        <div className="main-nav">
          <div className="nav-left">
            <img
              className="kikea-logo"
              alt="kikea"
              src="/Users/moonpc/Desktop/project/29-1st-KIKEA-frontend/public/images/kikeaLogo.png"
            />
          </div>
          <div className="nav-center">
            <SearchBox />
          </div>
          <div className="nav-icons-container">
            <ul className="nav-icons-list">
              <li>
                <FontAwesomeIcon
                  className="ware-house-icon icon"
                  icon={faWarehouse}
                />
              </li>
              <button type="button" className="ware-house-btn">
                <span className="btn-span">매장 정보 확인</span>
                <p className="btn-span-two">매장 선택</p>
              </button>
              <li className="nav-icon-list">
                <FontAwesomeIcon className="truck-icon icon" icon={faTruck} />
              </li>
              <li className="nav-icon-list">
                <FontAwesomeIcon
                  onClick={showLoginBar}
                  className="user-icon icon"
                  icon={faUser}
                />
              </li>
              <li className="nav-icon-lgiist">
                <FontAwesomeIcon className="heart-icon icon" icon={faHeart} />
              </li>
              <li className="nav-icon-list">
                <FontAwesomeIcon
                  className="bag-icon icon"
                  icon={faShoppingBag}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="all-products-container">
          <ul className="all-products-list">
            <li onClick={showMenu} className="all-products-menu">
              모든 제품
            </li>
            <li className="all-products-menu">온라인 쇼룸</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavBar;