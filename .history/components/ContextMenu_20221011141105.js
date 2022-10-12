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
    this.setState({
      xPos: `${e.pageX}px`,
      yPos: `${e.pageY}px`,
      showMenu: true,
    });
  }

  return <>jgyugyug</>;
}

export default ContextMenu;
