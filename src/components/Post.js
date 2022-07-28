import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import { Box, Button, TextField } from "@mui/material"

export const Post = ({ title, body, id, onEdit, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        onEdit(id, evt.target.title.value, evt.target.body.value);
        setIsEdit(!isEdit);
    };

    return (
        <div>
            {isEdit ? (
                <form onSubmit={handleOnEditSubmit}>
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        placeholder="title" name="title" defaultValue={title}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        placeholder="body" name="body" defaultValue={body}
                    />
                    <button onSubmit={handleOnEditSubmit}>Save</button>
                </form>
            ) : (
                <TableContainer component={Paper}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow key={id}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{body}</TableCell>
                                <TableCell>
                                    <Box m={0.5}>
                                        <Button onClick={handleEdit} variant="outlined" color="success">
                                            Edit
                                        </Button>
                                    </Box>
                                    <Box m={0.5}>
                                        <Button id={id} onClick={handleDelete} variant="outlined" color="error">
                                            Delete
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};
