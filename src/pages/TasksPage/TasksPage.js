import React from "react";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/task";
import axios from "axios";
import CreateTask from "../../components/Tasks/CreateTask";
import TaskList from "../../components/Tasks/TaskList";
import UpdateTask from "../../components/Tasks/UpdateTask";

const TasksPage = () => {
  // state
  const [task, setTask] = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await axios.get("/tasks");
      setTask({ ...task, tasks: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CreateTask />
      <TaskList />
      <UpdateTask />
      {/*<pre>{JSON.stringify(task.selected, null, 4)}</pre>*/}
    </>
  );
};

export default TasksPage;
