import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/task";
import axios from "axios";
import socket from "../../socket";

const CreateTask = () => {
  // content
  const [content, setContent] = useState("");
  const [task, setTask] = useContext(TaskContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/task", { content });
      setTask({ ...task, tasks: [data, ...task.tasks] });
      setContent("");
      // emit socket event
      socket.emit("new-task", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="d-flex justify-content" onSubmit={handleSubmit}>
            <textarea
              maxLength="1028"
              className="form-control m-1"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write something..."
            />
            <button className="btn btn-warning m-1" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
