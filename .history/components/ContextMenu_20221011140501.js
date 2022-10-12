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

  });

  return <></>;
}

export default ContextMenu;
