import React, { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import Button from "./Button";

const AddingTodo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <AddTodoModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Button
        text={"Add New Todo"}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      />
    </>
  );
};

export default AddingTodo;
