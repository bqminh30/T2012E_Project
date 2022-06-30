import React, { useRef, useEffect } from 'react'
import { Link, useLocation,NavLink } from 'react-router-dom'

import logo from '../assets/images/logo.jpg'
import { Icon } from '@iconify/react';

const mainNav = [
    {
        display: "Home",
        path: "/"
    },
    {
        display: "Product",
        path: "/catalog"
    },
    {
        display: "Blog",
        path: "/blog"
    },
    {
        display: "About Us",
        path: "/about"
    },
    {
        display: "Contact",
        path: "/contact"
    }
]

const Header = (props) => {
    // console.log('props', props);

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header shrink" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/profile">
                                <i className="bx bx-user"></i>
                            </Link>
                            
                        </div>
                        <div className="header__menu__item header__menu__right__item"style={{marginTop:'-10px'}}>
                            <NavLink to="/login">
                                <i ><Icon icon="clarity:logout-line" /></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
