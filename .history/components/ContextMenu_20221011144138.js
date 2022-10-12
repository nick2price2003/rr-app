import React, { useEffect, useState } from "react";
import { Motion, spring } from "react-motion";

function ContextMenu({ menu }) {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      if (showMenu) setShowMenu(true);
    });
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      setShowMenu(true);
      setXPos(`${event.pageX}px`);
      setYPos(`${event.pageY}px`);
    });
  });

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
              {menu}
            </div>
          ) 
      )}
    </Motion>
  );
}

export default ContextMenu;
