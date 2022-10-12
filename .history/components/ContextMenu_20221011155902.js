import React, { useEffect, useState, useCallback } from "react";
import { Motion, spring } from "react-motion";

const useContextMenu = () => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu };
};

function ContextMenu() {
  const { xPos, yPos, showMenu } = useContextMenu();
  const handleAddNode = () => {
    document.getElementById("node-container").innerHTML += "<div id='node-box'>";
  };
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
              <ul className='menu'>
                <li onClick={handleAddNode}>Create Node</li>
              </ul>
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
