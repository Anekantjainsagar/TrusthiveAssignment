import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import { addTodos } from "../Redux/reducer";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    width: window.innerWidth < 550 ? "80%" : "30%",
    borderRadius: "1rem",
    color: "white",
  },
};

const AddTodoModal = ({ modalIsOpen, closeModal }) => {
  const dispath = useDispatch();
  const [todo, setTodo] = useState({
    name: "",
    date: "",
    time: "",
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex items-center justify-between mx-2">
          <h1 className="text-2xl">Add new Todo</h1>
          <AiOutlineClose size={22} />
        </div>
        <div className="flex flex-col items-center my-2">
          <label htmlFor="todo" className="text-lg">
            Enter the task name :-{" "}
          </label>
          <input
            type="text"
            id="todo"
            className="block outline-none text-black rounded-md my-2 m-auto w-[75%] px-2.5 py-1"
            placeholder="Enter a todo task"
            value={todo.name}
            onChange={(e) => {
              setTodo({
                ...todo,
                name: e.target.value,
              });
            }}
          />
          <label htmlFor="todoDate" className="text-lg">
            Enter the task date :-{" "}
          </label>
          <input
            type="date"
            id="todoDate"
            className="block outline-none text-black rounded-md my-2 m-auto w-[75%] px-2.5 py-1"
            value={todo.date}
            onChange={(e) => {
              setTodo({
                ...todo,
                date: e.target.value,
              });
            }}
          />
          <label htmlFor="todoTime" className="text-lg">
            Enter the task time :-{" "}
          </label>
          <input
            type="time"
            id="todoTime"
            value={todo.time}
            onChange={(e) => {
              setTodo({
                ...todo,
                time: e.target.value,
              });
            }}
            className="block outline-none text-black rounded-md my-2 m-auto w-[75%] px-2.5 py-1"
          />
        </div>
        <Button
          text={"Add Todo"}
          onClick={(e) => {
            e.preventDefault();
            if (todo.name.length > 0 && todo.date.length > 0) {
              const notify = () => toast.success("Task added successfully");
              setTodo({ name: "", date: "", time: "" });
              dispath(addTodos(todo));
              notify();
            } else {
              const notify = () => toast.warn("Please add task name and date");
              notify();
            }
            closeModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default AddTodoModal;
