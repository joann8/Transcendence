import React, {Fragment, useEffect, useState} from 'react';
import {Typography, Button} from '@mui/material'

//Table
import { Table, TableBody , TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

//
import EditTodo from './EditTodo';

const ListTodo = () => {

    const [todo, setTodo] = useState([]);

    //delete todo
    const deleteTodo = async(id: number) => {
        try {
            const todelete = await fetch(`http://localhost:5000/tab/${id}`, 
            {
                method: "DELETE"
            });
            setTodo(todo.filter((row : any) => row.id != id));
        } catch (err : any) {
            console.log(err);
        }
    }

    //List todo
    const getTodo = async () => {
        try{
            const response = await fetch("http://localhost:5000/tab")
            const jsonData = await response.json();
            setTodo(jsonData);
        } catch (err : any) {
            console.log(err);
        }
    }

    useEffect(() => { getTodo();} , []);

    return(
        <div>
            <Typography variant="h4"> Tasks you have to do: </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left"> Task Description</TableCell>
                        <TableCell align="center"> Edit </TableCell>
                        <TableCell align="center"> Delete </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todo.map((row : any) => (
                        <TableRow key={row.id} >
                        <TableCell align="left">{row.description}</TableCell>
                        <TableCell align="center"><EditTodo data={row} /> </TableCell>
                        <TableCell align="center">
                            <Button variant="outlined" color="error" onClick={() => deleteTodo(row.id)}> Delete</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ListTodo;
