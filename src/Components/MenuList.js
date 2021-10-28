import React from "react";

function MenuList({ hyper_link, link_name }) {
  return (
    <li>
      <a href={hyper_link}>{link_name}</a>
    </li>
  );
}

export default MenuList;
