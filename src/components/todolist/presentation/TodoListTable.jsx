import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoListTable = ({ todoList }) => {
  return (
    <>
      <Table>
        <TableBody>
          {todoList.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell align="left">{item.todoItem}</TableCell>
                <TableCell align="left">
                  <IconButton>
                    <CheckIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <IconButton>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TodoListTable;
