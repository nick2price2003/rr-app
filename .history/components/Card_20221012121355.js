import Draggable from "react-draggable";

export default function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable bounds='parent'>
      <div className='card' key={currentTask.id}>
        <div className='heading'>
          <div className="container">
            <div className="row">
              <div className="col-9">
              <h3>{currentTask.name && currentTask.name}</h3>
              </div>
              <div className="col-3">

              </div>
            </div>
          </div>
        </div>
        <p>{currentTask.description}</p>
      </div>
    </Draggable>
  );
}
