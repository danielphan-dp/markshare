import React, { useContext } from "react";
import { TaskContext } from "../../context/task";
import { AuthContext } from "../../context/auth";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(require("dayjs/plugin/relativeTime"));

const TaskList = () => {
  const [task, setTask] = useContext(TaskContext);
  const [auth, setAuth] = useContext(AuthContext);

  const handleClick = (item) => {
    setTask({ ...task, selected: item });
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <pre
            className="text-center"
            style={{
              textDecoration: "underline gold",
              textDecorationThickness: "3px",
            }}
          >
            {task?.tasks?.length} tasks
          </pre>

          {task?.tasks?.map((task) => (
            <div
              key={task._id}
              style={{
                background:
                  auth?.user?._id === task?.postedBy?._id
                    ? "#f2ffe6"
                    : "#ffe6e6",
              }}
              className="rounded p-2 m-2 tasklist"
              onClick={() => handleClick(task)}
            >
              <p>{task.task}</p>
              <p
                className="float-end"
                style={{ fontSize: "12px", marginTop: "-15px" }}
              >
                by {task.postedBy?.name}, {dayjs(task.createdAt).fromNow()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
