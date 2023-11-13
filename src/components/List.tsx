import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TablePagination,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

interface IdListProps {
  ids: string[];
  onDeleteId: (id: string) => void;
}

const IdList: React.FC<IdListProps> = ({ ids, onDeleteId }) => {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const rowsPerPage = 8;
  const ordersPerPage = 27;

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  let slicedIds = ids.slice(startIndex, endIndex);

  if (slicedIds.length < rowsPerPage) {
    const emptyRows = new Array(rowsPerPage - slicedIds.length).fill(null);
    slicedIds = slicedIds.concat(emptyRows);
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleDeleteId = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedId === null) {
      console.error("selectedId is null");
      setOpen(false);
      return;
    }

    onDeleteId(selectedId);
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete id {selectedId}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Paper>
        <TableContainer component={Paper} sx={{ margin: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nro Orden</TableCell>
                <TableCell>Pagina Padron</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedIds.map((id, index) => (
                <TableRow key={index}>
                  <TableCell>{id}</TableCell>
                  <TableCell>
                    {id ? Math.ceil(Number(id) / ordersPerPage) : null}
                  </TableCell>
                  <TableCell>
                    {id !== null && (
                      <IconButton
                        onClick={() => handleDeleteId(id)}
                        sx={{ ml: 1 }}
                      >
                        <Delete color="error" />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={ids.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
        />
      </Paper>
    </Box>
  );
};

export default IdList;
