import React from "react";
import Nav from "./Components/Nav";
import AddingTodo from "./Components/AddingTodo";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
import { addTodos } from "./Redux/reducer";

const App = () => {
  const selector = useSelector(addTodos);
  return (
    <div className="bg-black h-[100vh]">
      <Nav />
      <AddingTodo />
      <div className="grid sm:grid-cols-1 md:grid-cols-5 mt-2">
        {selector.payload.map((e) => {
          return <TodoItem data={e} />;
        })}
      </div>
    </div>
  );
};

export default App;
