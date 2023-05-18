import React, { useState } from "react";
import Nav from "./Components/Nav";
import AddingTodo from "./Components/AddingTodo";
import TodoItem from "./Components/TodoItem";
import { useSelector } from "react-redux";
import { addTodos } from "./Redux/reducer";

const App = () => {
  const selector = useSelector(addTodos);
  const [search, setSearch] = useState("");
  return (
    <div className="bg-black h-[100vh]">
      <Nav />
      <AddingTodo />
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="block sm:w-[60%] md:w-[20%] my-2 m-auto outline-none sm:rounded-lg md:rounded-md py-0.5 text-center px-2"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-5 mt-2">
        {selector.payload
          .filter((e) => {
            if (search?.length > 0) {
              return e?.name?.toLowerCase().includes(search?.toLowerCase());
            }
            return e;
          })
          .map((e) => {
            return <TodoItem data={e} />;
          })}
      </div>
    </div>
  );
};

export default App;
