import { Button, Grid, TextField } from "@mui/material";

const TodoInput = ({ handleAddTodo, handleChange }) => {
  return (
    <>
      <TextField
        id="todoitem"
        label="todo"
        variant="outlined"
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add
      </Button>
    </>
  );
};

export default TodoInput;
