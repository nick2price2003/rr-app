import React, { useEffect, useState } from "react";
import { Motion, spring } from "react-motion";

function ContextMenu(menu) {
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

  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: !showMenu ? spring(0) : spring(1) }}
    >
      {(interpolatedStyle) => (
        <>
          {showMenu ? (
            <div
              className='menu-container'
              style={{
                top: yPos,
                left: xPos,
                opacity: interpolatedStyle.opacity,
              }}
            >
              {this.props.menu}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  );
}

export default ContextMenu;
