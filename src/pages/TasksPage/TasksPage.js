import React from "react";
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../../context/task";
import axios from "axios";
import CreateTask from "../../components/Tasks/CreateTask";
import TaskList from "../../components/Tasks/TaskList";
import UpdateTask from "../../components/Tasks/UpdateTask";
import socket from "../../socket";

const TasksPage = () => {
  // state
  const [task, setTask] = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    socket.on("new-task", (task) => {
      setTask((prev) => ({ ...prev, tasks: [task, ...prev.tasks] }));
    });
    return () => socket.off("new-task");
  }, []);

  const loadTasks = async () => {
    try {
      const { data } = await axios.get("/tasks/1");
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
    </>
  );
};

export default TasksPage;
