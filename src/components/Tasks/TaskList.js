import React, { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/task";
import { AuthContext } from "../../context/auth";
import useSearch from "../../hooks/useSearch";
import dayjs from "dayjs";
import axios from "axios";
import relativeTime from "dayjs/plugin/relativeTime";
import Timer from "./Timer";
import Masonry from "react-masonry-css";
import SearchBar from "../../components/Forms/SearchBar/SearchBar";
dayjs.extend(relativeTime);

const TaskList = () => {
  // context(s)
  const [task, setTask] = useContext(TaskContext);
  const [auth, setAuth] = useContext(AuthContext);
  // state(s)
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // hook(s)
  const { keyword, setKeyword, filteredTasks } = useSearch();

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {
    page >= 2 && loadTasks();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/task-count");
      setTotal(data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadTasks = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/tasks/${page}`);
      setTask((prev) => ({ ...prev, tasks: [...prev.tasks, ...data] }));
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleClick = (item) => {
    setTask({ ...task, selected: item });
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <pre
            className="text-center"
            style={{
              textDecoration: "underline gold",
              textDecorationThickness: "3px",
            }}
          >
            {task?.tasks?.length} tasks
          </pre>

          <Masonry
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredTasks.map((task) => (
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
                <p style={{ wordBreak: "break-all", whiteSpace: "normal" }}>
                  {task.task}
                </p>
                <p
                  className="float-end"
                  style={{ fontSize: "8px", marginTop: "-8px" }}
                >
                  by {task.postedBy?.name}, {<Timer time={task.createdAt} />}
                </p>
              </div>
            ))}
          </Masonry>

          {task?.tasks?.length < total && (
            <div className="text-center mt-4 mb-4">
              <button
                className="btn btn-outline-warning"
                disabled={loading}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(page + 1);
                }}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
