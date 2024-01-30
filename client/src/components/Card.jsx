import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



export default function CardView({title, img, id}){



    return(
        <Card sx={{ maxWidth: 350 }} >
                    <CardActionArea component={Link} to={`/recipes/${id}`}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={img}
                            alt="recipe"
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h6' component="div" >
                               {title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
    );
}