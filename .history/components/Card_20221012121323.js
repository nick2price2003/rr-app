import Draggable from "react-draggable";

export default function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable bounds='parent'>
      <div className='card' key={currentTask.id}>
        <div className='heading'>
          <div className="container">
            <div className="row"
          </div>
          <h3>{currentTask.name && currentTask.name}</h3>
          <img
            onClick={() => {
              const newTaskList = tasks.filter((item) => {
                if (item.id != currentTask.id) {
                  return item;
                }
              });
              addTask(newTaskList);
            }}
            src='https://toppng.com/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png'
            style={{ height: "20px", width: "20px" }}
          />
        </div>
        <p>{currentTask.description}</p>
      </div>
    </Draggable>
  );
}
