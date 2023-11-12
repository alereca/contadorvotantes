import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, TablePagination, Box } from '@mui/material';
import { useState } from 'react';

interface IdListProps {
    ids: string[];
}

const IdList: React.FC<IdListProps> = ({ ids }) => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 8;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
    };

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    let slicedIds = ids.slice(startIndex, endIndex);

    if (slicedIds.length < 5) {
        const emptyRows = new Array(5 - slicedIds.length).fill(null);
        slicedIds = slicedIds.concat(emptyRows);
    }

    const ordersPerPage = 27;
    return (
        <Box sx={{ width: '100%' }}>
            <Paper>
                <TableContainer component={Paper} sx={{ margin: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nro Orden</TableCell>
                                <TableCell>Pagina Padron</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {slicedIds.map((id, index) => (
                                <TableRow key={index}>
                                    <TableCell>{id}</TableCell>
                                    <TableCell>{id ? Math.ceil(Number(id)/ordersPerPage) : null}</TableCell>
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
                />
            </Paper>
        </Box>
    );
};

export default IdList;
