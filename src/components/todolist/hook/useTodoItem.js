import { useState } from "react";
import { ulid } from "ulid";

export const useTodoItem = () => {
  // Todoの入力データ
  const [todo, setTodo] = useState("");
  // Todo一覧
  const [todoList, setTodoList] = useState([]);
  // テキストフィールドの値をstateに設定
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Addボタンクリック時のイベントハンドラー
  const handleAddTodo = () => {
    const id = ulid();
    const todoItem = {
      id: id,
      todoItem: todo,
      completed: false,
      deleted: false,
    };
    setTodoList([...todoList, todoItem]);
    setTodo("");
  };

  return [todoList, handleAddTodo, handleChange];
};
