import React, {Fragment, useState} from 'react';
import { Typography, Button , Container} from '@mui/material';

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async(e : any) => {
        e.preventDefault();
        try{
            const body = {description};
            const response = await fetch("http://localhost:5000/tab", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            setDescription("");
        } catch(err){
            console.log("EROR");
        }
        window.location.reload();
    };

    return(
        <Fragment>
            <Typography variant="h4" align="center" > Add a new task </Typography>
            <Container>
                <form className="d-flex" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                    <input type="text" 
                    className="form-control" 
                    value={description}
                    onChange={e => setDescription(e.target.value)} />
                   <Button variant="contained" onClick={e => onSubmitForm(e)}>Add</Button>
                </form>
            </Container>
        </Fragment>
    );
};

export default InputTodo;
