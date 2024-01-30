import axios from 'axios';
import { useEffect, useState } from 'react';
import CardView from '../components/Card';
import '../components/styles.css'
import { Grid } from '@mui/material';

export default function Home() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipeInfo')
            .then(response => {
                setRecipes(response.data); // Access response.data
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            <div>
                <h1 style={{ color: "black", textAlign: "center", fontSize: "40px" }}>Featured Recipes</h1>
            </div>

            <div className='grid_view'>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 4, sm: 2, md: 3, lg: 4 }}>
                    {recipes &&
                        recipes.map((recipe) => (
                            <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                                <div key={recipe.id}>
                                <CardView title={recipe.title} img={recipe.image_recipe} id={recipe._id} />
                                </div>
                            </Grid>
                        ))}
                

                </Grid>
            </div>


        </>
    );
}