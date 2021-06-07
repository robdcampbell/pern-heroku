import React, { useState } from "react";

const EditTodo = ({ showModal, setShowModal, todo, trip, setTrip }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async () => {
    console.log(`${description} TEST`);

    const body = { description };

    const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    // await console.log(res);
    setTrip((prev) => (prev += 1));
  };

  return (
    <div className="edit__modal">
      <div className="modal__content">
        <h1>Edit Todo {todo.todo_id}</h1>
        <input
          type="text"
          placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="modal__controls">
          <p>
            <span
              className="confirm__edit"
              onClick={(e) => {
                updateDescription();
                setShowModal(false);
              }}
            >
              Confirm Edit
            </span>
          </p>
          <p>
            <span
              className="confirm__edit"
              onClick={(e) => setShowModal(false)}
            >
              Close
            </span>
          </p>
        </div>

        <p>
          <span className="close__modal" onClick={(e) => setShowModal(false)}>
            X
          </span>
        </p>
      </div>
    </div>
  );
};

export default EditTodo;
