import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from 'react-bootstrap/Button';
type PropsType ={
Icon: any,
Heading : string
}

export default function HealthCard(props : PropsType) {
    return (
        <Card sx={{ textAlign:"center" , marginTop:"5%"}}>
            <CardActionArea>
             <Typography sx={{marginTop:"12%", fontSize:50}}>
                    {
                        props.Icon
                    }
             </Typography>

                <CardContent sx={{padding : "10%"}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {
                            props.Heading
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                    </Typography>
                </CardContent>
            </CardActionArea>
                <Button variant="outline-danger text-white border-white w-100 py-3 mt-5">DISCOVER MORE ABOUT AS  </Button>{' '}
        </Card>
    );
}