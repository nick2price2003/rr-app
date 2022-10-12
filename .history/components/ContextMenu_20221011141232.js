import React, { useEffect, useState } from "react";

function ContextMenu() {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
  });

  function handleClick(e) {
    console.log(showMenu);
    if (showMenu) setShowMenu(true);
  }

  function handleContextMenu(e) {
    e.preventDefault();
    setShowMenu(true);
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
  }

  if (showMenu)
    return (
      <ul
        className='menu'
        style={{
          top: yPos,
          left: xPos,
        }}
      >
        <li>Login</li>
        <li>Register</li>
        <li>Open Profile</li>
      </ul>
    );

  return <>sdfsdfsdf</>;
}

export default ContextMenu;
