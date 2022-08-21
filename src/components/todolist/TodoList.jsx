import { useTodoItem } from "./hook/useTodoItem";
import TodoInput from "./presentation/TodoInput";
import TodoListHeader from "./presentation/TodoListHeader";
import TodoListTable from "./presentation/TodoListTable";

const TodoList = () => {
  const [todoList, handleAddTodo, handleChange] = useTodoItem();

  return (
    <>
      <TodoListHeader />
      <TodoInput handleChange={handleChange} handleAddTodo={handleAddTodo} />
      <TodoListTable todoList={todoList} />
    </>
  );
};

export default TodoList;
