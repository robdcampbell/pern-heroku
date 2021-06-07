import React, { useState, useRef } from "react";

const InputTodo = ({ trip, setTrip }) => {
  //const [description, setDescription] = useState("");
  const description = useRef();

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description: description.current.value };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(response);
      description.current.value = "";
      setTrip((prev) => (prev += 1));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form className="todo__form" onSubmit={(e) => onSubmitForm(e)}>
      <h1>The ole' todo list</h1>
      <div className="add__controls">
        <input
          type="text"
          placeholder="add todo"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          ref={description}
        />
        <button>Add</button>
      </div>
    </form>
  );
};

export default InputTodo;
