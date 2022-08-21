import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./components/todolist/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
