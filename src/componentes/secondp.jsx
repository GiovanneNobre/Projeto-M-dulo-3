import { Typography } from "@mui/material"
import { blue } from "@mui/material/colors"

function ParaTwo(){
    return(
        <div className="para_two">
           <Typography variant="subtitle2" sx={{color:'blue', textDecoration: 'underline', position:'relative', left:'93px', bottom:'24px', padding: '5px', marginBottom:'50px'}}>Already have an account? Sign in</Typography> 
        </div>
      
    )

}

export default ParaTwo