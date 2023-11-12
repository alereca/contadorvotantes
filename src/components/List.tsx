import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, TablePagination, Box } from '@mui/material';
import { useState } from 'react';

interface IdListProps {
    ids: string[];
}

const IdList: React.FC<IdListProps> = ({ ids }) => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 15

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
      ) => {
        setPage(newPage);
    };

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedIds = ids.slice(startIndex, endIndex);

    return (
        <Box sx={{ width: '100%' }}>
            <Paper>
                <TableContainer component={Paper} sx={{ margin: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {slicedIds.map((id, index) => (
                                <TableRow key={index}>
                                    <TableCell>{id}</TableCell>
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
