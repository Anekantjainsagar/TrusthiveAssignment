import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeTodo } from "../Redux/reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={
        new Date(data?.date).toString().slice(4, 16) ===
        new Date(Date.now()).toString().slice(4, 16)
          ? { border: "1px solid green" }
          : new Date(data?.date).toString().slice(4, 16) <=
            new Date(Date.now()).toString().slice(4, 16)
          ? { border: "1px solid red" }
          : {}
      }
      className="w-[90%] m-auto my-3 rounded-lg py-3 px-4 flex flex-col items-center justify-center bg-black border text-white"
    >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <h1 className="text-2xl font-medium text-center">{data?.name}</h1>
      <p className="my-1">
        {new Date(data?.date).toString().slice(4, 16) + data?.time}
      </p>
      <Button
        text={"Delete Todo"}
        onClick={(e) => {
          e.preventDefault();
          dispatch(removeTodo(data?.name + data?.time));
          const notify = () => toast.error("Todo task deleted");
          notify();
        }}
      />
    </div>
  );
};

export default TodoItem;
