import {  TextField } from "@mui/material"

function SecondQuestions() {
    return(
    <TextField 
    label='Email Address *'
    variant="outlined"
    size="small"
    margin="dense"
    className="segundo-input"
    sx={{marginBottom:'10px', borderTop:'100px', }}
    />
    )

}


export default SecondQuestions