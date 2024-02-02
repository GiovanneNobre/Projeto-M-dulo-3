import {  TextField } from "@mui/material"
import './teste.css'


function FirstQuestion(){
    return(
        <div>
        <TextField
        label='First Name *'
        variant="outlined"
        size="small"
        className="newteste"
        sx={{
            '& > :not(style)': { m:1 },
          }}
        />
         <TextField
        label='Last Name *'
        variant="outlined"
        size="small"
        className="oldteste"
        sx={{
            '& > :not(style)': { m:1},
          }}

        />
         </div>

       
    )

}

export default FirstQuestion