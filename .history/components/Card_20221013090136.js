import Draggable from "react-draggable";

export default function Card({ currentTask, tasks, addTask }) {
  return (
    <Draggable>
      <div className='card' key={currentTask.id}>
        <div className='heading'>
          <div className='container'>
            <div className='row'>
              <div className='col-9'>
                <h3>{currentTask.name && currentTask.name}</h3>
              </div>
              <div className='col-3'>
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
            </div>
            <div className='row'>
              <div className='col-12'>
                <p>{currentTask.description}</p>
              </div>
              <div className='col-12'>
                <p>{currentTask.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
