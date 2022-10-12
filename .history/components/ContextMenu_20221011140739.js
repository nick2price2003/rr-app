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
    if (state.showMenu) this.setState({ showMenu: false });
  };

  function handleContextMenu(e) {
    e.preventDefault();
    console.log(e);
  };

  return <>
  jgyugyug
  </>;
}

export default ContextMenu;
