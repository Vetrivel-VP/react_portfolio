import React, { useEffect, useState } from "react";
import MenuList from "./MenuList";
import MenuLink from "./MenuLink.js";
import "./Header.css";

// Icons
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleActive = () => {
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const menu = document.getElementById("menu");
    var allLi = menu.querySelectorAll("li");

    function linkAction() {
      //Active Link
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", linkAction));
  });

  return (
    <header>
      <nav className="nav bd_grid">
        <a href="#" className="nav_logo">
          Personal
        </a>

        <ul className={isMenuActive ? "show" : ""} id="menu">
          {MenuLink &&
            MenuLink.map((menuData) => (
              <MenuList
                key={menuData.id}
                hyper_link={menuData.hyper_link}
                link_name={menuData.link_name}
                setMenuActive={setMenuActive}
              />
            ))}
        </ul>

        <i className="toggleMenu" onClick={toggleActive}>
          <BiMenuAltRight />
        </i>
      </nav>
    </header>
  );
}

export default Header;
