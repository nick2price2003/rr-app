function Card({{ currentCard, tasks, addTask }}) {
    const { xPos, yPos, showMenu } = useContextMenu();
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
  
  export default Card;
  