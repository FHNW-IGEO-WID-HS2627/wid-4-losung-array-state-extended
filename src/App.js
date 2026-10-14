import { useState } from "react";
import "./app.css";

function App() {
  const [todos, setTodos] = useState([
    { task: "Script lesen", prio: "mittel" },
    { task: "Hausaufgabe machen", prio: "mittel" },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoPrio, setNewTodoPrio] = useState("mittel");

  // Funktion um ToDos der Liste hinzufügen
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setNewTodo(""); // Leert zusätzlich das Input-Feld
  };

  const removeTodo = (index) => {
    // Iteriert über den ganzen Array und vergleicht für jedes Element den Index (i) mit dem Index vom Funktionsaufruf im EventHandler
    // Nur Elemente mit einem anderen Index als das geklickte Element werden übernommen - dadurch wird das geklickte Element entfernt (gefiltert)
    const remainingTodos = todos.filter((todo, i) => index !== i);
    // Der neue Array mit den gefilterten Elementen wird in State gespeichert.
    setTodos(remainingTodos);
  };

  return (
    <div id="app">
      <header>Übung WID 3 - Array State (Lösung)</header>
      <h2> Todo-Liste</h2>
      <div id="container">
        {/* Eingabe für weitere ToDos  */}
        <div id="eingabe">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <select
            onChange={(e) => setNewTodoPrio(e.target.value)}
            value={newTodoPrio}
          >
            <option value="hoch">Hohe Priorität</option>
            <option value="mittel">Mittlere Priorität</option>
            <option value="niedrig">Niedrige Priorität</option>
          </select>
          <button onClick={() => addTodo({ task: newTodo, prio: newTodoPrio })}>
            Hinzufügen
          </button>
        </div>
        <hr />
        {/* ToDo Liste  */}
        <ol>
          {todos.map((todo, index) => (
            <li
              style={{
                backgroundColor:
                  todo.prio === "hoch"
                    ? "red"
                    : todo.prio === "mittel"
                      ? "yellow"
                      : "green",
              }}
            >
              <div className="todo" key={index}>
                <p>{todo.task}</p>
                {/* index ist der index aus der .map() Funktion - die Position des Elements im Array. Dieser ist eindeutig und wird zur Identifikation des Elements verwendet */}
                <button onClick={() => removeTodo(index)}> Löschen</button>{" "}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
