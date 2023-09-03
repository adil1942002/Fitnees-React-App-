import { Button } from '@mui/material';

export default function Btn(props :{label :string | number}){
return<>
    <Button sx={{ padding: 2 ,backgroundColor:"red"}} color='error' variant="contained" disableElevation>
        {
            props.label
        }
    </Button>
</>
}
 