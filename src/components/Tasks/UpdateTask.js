import React, { useState, useEffect, useContext } from "react";
import { Modal } from "antd";
import { TaskContext } from "../../context/task";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { toast } from "react-hot-toast";

const UpdateTask = () => {
  const [task, setTask] = useContext(TaskContext);
  const [auth, setAuth] = useContext(AuthContext);
  const [content, setContent] = useState("");

  useEffect(() => {
    task && setContent(task?.selected?.task);
  }, [task]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(`/task/${task?.selected?._id}`, {
        task: content,
      });
      const newList = task.tasks.map((task) => {
        if (task._id === data._id) {
          return data;
        }
        return task;
      });
      setTask((prev) => ({ ...prev, tasks: newList, selected: null }));
      toast.success("Task Updated!");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.delete(`/task/${task?.selected?._id}`);
      setTask((prev) => ({
        ...prev,
        tasks: prev.tasks.filter((task) => task._id !== data._id),
        selected: null,
      }));
      toast.success("Task Deleted!");
    } catch (err) {
      console.log(err);
    }
  };

  const canUpdateDelete = auth?.user?._id === task?.selected?.postedBy._id;

  return (
    <>
      <Modal
        width="800px"
        centered
        title="Update Task"
        visible={task?.selected !== null}
        onOk={() => setTask({ ...task, selected: null })}
        onCancel={() => setTask({ ...task, selected: null })}
        footer={null}
      >
        <form className="d-flex justify-content">
          <div className="container">
            <MDEditor
              value={content}
              onChange={setContent}
              previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
              }}
            />
          </div>
          {canUpdateDelete ? (
            <div>
              <button
                className="btn btn-primary"
                style={{ height: "50px", width: "100px" }}
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="btn btn-danger mt-1"
                style={{ height: "50px", width: "100px" }}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </form>
      </Modal>
    </>
  );
};

export default UpdateTask;

// prettier-ignore
// text area code
{
  {/*<textarea*/}
  {/*  width="30%"*/}
  {/*  maxLength="1028"*/}
  {/*  className="form-control m-1"*/}
  {/*  value={content}*/}
  {/*  onChange={(event) => setContent(event.target.value)}*/}
  {/*  placeholder="Type something..."*/}
  {/*/>*/}
}
