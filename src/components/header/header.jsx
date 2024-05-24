import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../imagepath"; // Adjust the path to your logo

const Header = () => {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 90) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener("scroll", checkScroll);
      checkScroll(); // Set the initial state based on current scroll position
    } else {
      setNavbar(true); // Set the navbar state for non-root paths
    }

    return () => {
      if (location.pathname === '/') {
        window.removeEventListener("scroll", checkScroll);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  const [mobileSubMenus, setMobileSubMenus] = useState({
    mobileSubMenu: false,
    mobileSubMenu2: false,
    mobileSubMenu22: false,
    mobileSubMenu3: false,
    mobileSubMenu32: false,
    mobileSubMenu4: false,
    mobileSubMenu42: false,
    mobileSubMenu43: false,
    mobileSubMenu5: false,
  });

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };

  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };

  const toggleMobileSubMenu = (menu) => (e) => {
    e.preventDefault();
    setMobileSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className="header">
      <div className="header-fixed">
        <nav
          className={
            location.pathname !== '/' || navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="/" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li className="has-submenu">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="has-submenu">
                  <Link to="/career">Career</Link>
                </li>
                <li className="has-submenu">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-sign" to="/login">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
