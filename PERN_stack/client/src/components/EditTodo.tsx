import React , { Fragment, useState} from 'react';
import { Container, Box, Button, Typography, Modal} from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const EditTodo = ({data} : any) => {
    const [input, setInput] = useState(data.description);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e : any) => {
        e.preventDefault();
        try{
            setInput(data.description);
            setOpen(false);
        } catch(err){
            console.log("EROR");
        }
    }
    
    const onSubmitClick = async(e : any) => {
        e.preventDefault();
        try{
            const body = { description: `${input}`};
            const response = await fetch(`http://localhost:5000/tab/${data.id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch(err){
            console.log("EROR");
        }
        window.location.reload();

    };

     return(
        <Fragment>
            <Button variant="contained" color="success" onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Todo
                    </Typography>
                    <form className="d-flex"  style={{display: "flex", justifyContent: "left", alignItems:"left"}}>
                        <input type="text" 
                        className="form-control" 
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    </form>                    
                    <footer style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                        <Button variant="outlined" color="success" onClick={e => onSubmitClick(e)}> Edit</Button>
                        <Button variant="outlined" color="error" onClick={e => handleClose(e)}> Close</Button>
                    </footer>
                </Box>
            </Modal>
        </Fragment>   
    );
};

export default EditTodo;
