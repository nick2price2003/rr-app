import React, { useEffect, useState } from "react";

function ContextMenu() {
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
  });

  function handleClick(e) {
    if (showMenu) setShowMenu(true);
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
