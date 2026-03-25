import React from 'react';
import { Link } from 'react-router';

const ManuList: React.FC = () => {
  return (
    <ul className="main-menu__list">

      <li>
        <Link to="/">Home</Link>
      </li>

      <li className="dropdown">
        <Link to="#">About Us</Link>
        <ul>
          <li><Link to="#">Company Overview</Link></li>
          <li><Link to="#">Leadership</Link></li>
          <li><Link to="#">Values</Link></li>
        </ul>
      </li>

      <li className="dropdown">
        <Link to="#">Services</Link>
        <ul>
          <li><Link to="#">IT Consulting</Link></li>
          <li><Link to="#">Network & Security</Link></li>
          <li><Link to="#">Cloud Infrastructure</Link></li>
          <li><Link to="#">Data Center</Link></li>
          <li><Link to="#">IT Operations</Link></li>
          <li><Link to="#">Telecom Solutions</Link></li>
          <li><Link to="#">Retail Technology</Link></li>
        </ul>
      </li>

      <li>
        <Link to="#">Trainings</Link>
      </li>

      <li>
        <Link to="#">Consulting</Link>
      </li>

      <li>
        <Link to="#">Industries</Link>
      </li>

      <li>
        <Link to="#">Careers</Link>
      </li>

<div className="main-menu-two__right">
            <div className="main-menu-two__call">
                <div className="main-menu-two__call-icon">
                    <i className="icon-phone"></i>
                </div>
                <div className="main-menu-two__call-content">
                    <p className="main-menu-two__call-sub-title">Call Anytime</p>
                    <h5 className="main-menu-two__call-number">
                        <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                    </h5>
                </div>
            </div>

            <div className="main-menu-two__btn-box">
                <Link to="/contact" className="thm-btn thm-btn-two main-menu-two__btn">
                    Contact us
                </Link>
            </div>
        </div>
    </ul>
  );
};

export default ManuList;