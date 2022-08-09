import { useState, createContext, useContext } from "react";
import axios from "axios";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState({
    tasks: [],
    selected: null,
  });

  return (
    <TaskContext.Provider value={[task, setTask]}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
