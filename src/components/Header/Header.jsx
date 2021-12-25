import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingOutlined,StarOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: "Женщины",
      link: "category/women",
      id: 1,
    },
    {
      title: "Мужчины",
      link: "category/men",
      id: 2,
    },
    {
      title: "Дети",
      link: "category/babies",
      id: 3,
    },
    {
      title: "Распродажа",
      link: "sales",
      id: 4,
    },
    {
      title: "Новинки",
      link: "news",
      id: 5,
    },
  ];
  return (
    <>
      <nav style={{justifyContent:"space-between", color:"white"}}>
        <div>
        <Link to="/">
          <img
            width="200px"
            src="//images.wbstatic.net/marketing/435345.png"
            alt=""
          />
        </Link>
        </div>
        <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {email === "aidarbek.mambetaliev@gmail.com"? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div>
        <div className="icons">
          <Link to="/cart">
            <Badge style={{marginLeft:"10px"}} count={+cartLength}>
            <ShoppingOutlined className="shop-cart"
                style={{ fontSize: "30px", cursor: "pointer" }}
                />
            </Badge>
          </Link>

        </div>
        <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Выйти
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Войти</button>
            </Link>
          )}
        </div>
      </nav>
      <div className="header">
        <div style={{display:"flex"}}>
                 
        </div>
      </div>
     
    </>
  );
};

export default Header;
