import React, { useEffect } from "react";

function ContextMenu() {
  state = {
    xPos: "0px",
    yPos: "0px",
    showMenu: false,
  };

  useEffect(() => {
    document.addEventListener("click", this.handleClick);
    document.addEventListener("contextmenu", this.handleContextMenu);

    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return <></>;
}

export default ContextMenu;
