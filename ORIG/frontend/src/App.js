import React, { useState } from "react";

import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  // default tripwire to set off Use Effects (prop drilling when state management not yet implemented)
  const [trip, setTrip] = useState(0);
  return (
    <div className="wrapper">
      <main className="App">
        <InputTodo trip={trip} setTrip={setTrip} />
        <ListTodos trip={trip} setTrip={setTrip} />
      </main>
    </div>
  );
}

export default App;
