import React, { useEffect } from "react";

function ContextMenu() {
  state = {
    xPos: "0px",
    yPos: "0px",
    showMenu: false,
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return <></>;
}

export default ContextMenu;
