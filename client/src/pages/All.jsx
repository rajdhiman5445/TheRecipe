import axios from 'axios';
import { useEffect, useState } from 'react';
import CardView from '../components/Card';
import '../components/styles.css'
import { Grid } from '@mui/material';
import CardViewAPI from '../components/CardAPI';

export default function AllRecipes() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipeInfo')
            .then(response => {
                setRecipes(response.data); // Access response.data
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);


    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    useEffect(() => {
        const delay = 120000; // Adjust the delay time in milliseconds (e.g., 5000 for 5 seconds)
    
        const timeoutId = setTimeout(() => {
          localStorage.removeItem("popular");
        }, delay);
    
        // Cleanup the timeout to prevent memory leaks
        return () => clearTimeout(timeoutId);
      }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");
        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RAPID_API}&number=20`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
    }

    return (
        <>
            <div>
                <h1 style={{ color: "black", textAlign: "center", fontSize: "40px" }}>Curated Recipes</h1>
            </div>

            <div className='grid_view'>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 4, sm: 2, md: 3, lg: 4 }}>
                    {recipes &&
                        recipes.map((recipe) => (
                            <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                                <CardView title={recipe.title} img={recipe.image_recipe} id={recipe._id} />
                            </Grid>
                        ))}
                

                </Grid>
            </div>

            <div>
                <h1 style={{ color: "black", textAlign: "center", fontSize: "40px" }}>Other Recipes</h1>
            </div>

            <div className='grid_view'>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 4, sm: 2, md: 3, lg: 4 }}>
                    {popular &&
                        popular.map((recipe) => (
                            <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                                <CardViewAPI title={recipe.title} img={recipe.image} id={recipe.id}/>
                            </Grid>
                        ))}
                </Grid>
            </div>
        </>
    );
}