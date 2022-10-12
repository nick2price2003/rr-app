import React, { useEffect } from "react";

function ContextMenu() {
  let state = {
    xPos: "0px",
    yPos: "0px",
    showMenu: false,
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
  });

  function handleClick(e) {
   console.log(e);
  };

  function handleContextMenu(e) {
    e.preventDefault();
    console.log(e);
  };

  return <></>;
}

export default ContextMenu;
