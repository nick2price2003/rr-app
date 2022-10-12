import Draggable from "react-draggable";

function Card({ currentCard, card, addTask }) {
  return (
    <Draggable grid={[10, 10]} axis='y' bounds='parent'>
      <div className='card' key={currentTask.id}>
        <div className='heading'>
          <h3>{currentCard.name && currentTask.name}</h3>
        </div>
        <p>{currentCard.description}</p>
      </div>
    </Draggable>
  );
}

export default Card;
