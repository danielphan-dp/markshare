import React from "react";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/task";
import axios from "axios";

const CreateTask = () => {
  const [content, setContent] = useState("");
  const [task, setTask] = useContext(TaskContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/task", { content });
      setTask({ ...task, tasks: [data, ...task.tasks] });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="d-flex justify-content" onSubmit={handleSubmit}>
        <textarea
          maxLength="1028"
          className="form-control m-1"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="write something"
        />
        <button className="btn btn-primary m-1" onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
