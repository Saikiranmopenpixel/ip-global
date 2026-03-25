import React, { useContext } from 'react';
import { Link } from 'react-router';

import logo2 from '../../assets/images/resources/logo.png';
import FinrisContext from '../../components/context/FinrisContext';
import ManuList from '../common/ManuList';

const Header: React.FC = () => {
    const context = useContext(FinrisContext);
    if (!context) throw new Error("Context Null");
    const { setIsMobile } = context;
    return (
        <header className="main-header-two">
            <div className="main-menu-two__top">
                <div className="main-menu-two__top-inner">
                    <ul className="list-unstyled main-menu-two__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+44 (0) 1276 402376">+44 (0) 1276 402376</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+91 11 4654 8309">+91 11 4654 8309</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@ipgs.net">info@ipgs.net</a></p>
                            </div>
                        </li>
                        {/* <li>
                            <div className="icon">
                                <i className="icon-pin"></i>
                            </div>
                            <div className="text">
                                <p>4124 Cimmaron Road, CA 92806</p>
                            </div>
                        </li> */}
                    </ul>
                    {/* <p className="main-menu-two__top-welcome-text">Welcome to Our business Agency</p> */}
                    <div className="main-menu-two__top-right">
                        <div className="main-menu-two__top-time">
                            <div className="main-menu-two__top-time-icon">
                                <span className="icon-time"></span>
                            </div>
                            <p className="main-menu-two__top-text">Mon - Fri: 09:00 - 05:00</p>
                        </div>
                        <div className="main-menu-two__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu main-menu-two">
                <div className="main-menu-two__wrapper">
                    <div className="main-menu-two__wrapper-inner">
                        <div className="row align-items-center">
    <div className="col-md-3">
        <div className="main-menu-two__left">
            <div className="main-menu-two__logo">
                <Link to="/">
                    <img src={logo2} alt="Logo" />
                </Link>
            </div>
        </div>
    </div>

    <div className="col-md-9">
        <div className="main-menu-two__main-menu-box">
            <a
                href="#"
                className="mobile-nav__toggler"
                onClick={() => setIsMobile((pre) => !pre)}
            >
                <i className="fa fa-bars"></i>
            </a>
            <ManuList />
        </div>

        
    </div>
</div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;