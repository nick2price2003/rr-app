import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNodeForm({ setAddItem, addItem, tasks, setTasks }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [stationid, setStationid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      name: name,
      description: description,
      stationid: stationid,
    };
    setTasks([...tasks, newTask]);
    setAddItem(!addItem);
  };
  return (
    <div className='addForm'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='Name'
          className='form-control mb-3'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          className='form-control mb-3'
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          name='stationid'
          id='stationid'
          className='form-select mb-3'
          onChange={(e) => {
            setStationid(e.target.value);
          }}
        >
          <option value=''>Station Id</option>
          <option value='020-000'>020-000</option>
          <option value='021-010'>021-010</option>
          <option value='040-010'>040-010</option>
          <option value='done'>050-010</option>
        </select>
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
}
