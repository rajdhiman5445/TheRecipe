import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../components/styles.css';

export default function Recipe_page() {
    
  const [recipes, setRecipes] = useState([]);
 const [specificRecipeId, setSpecificRecipeId] = useState();
  let params = useParams();


  useEffect(() => {
    axios.get('http://localhost:3001/recipeInfo')
      .then(response => {
        setRecipes(response.data); // Access response.data
        //console.log(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setSpecificRecipeId(params.id);
  }, [params.id]);

 //const specificRecipeId = "658ed662385c66402c592f77";
  const specificRecipe = recipes.find(recipe => recipe._id === specificRecipeId);


  if (specificRecipe) {
    return (
      <div key={specificRecipe._id}>
        <div className='recipe_details'><h1 style={{ textAlign: 'center' }}>{specificRecipe.title}</h1></div>
        <img className='image_recipe' src={specificRecipe.image_recipe} alt={specificRecipe.title} />
        <p className='quote_recipe'>{specificRecipe.quote_recipe}</p>
        <h3 className='ing_recipe'>Ingredients</h3>
        <p className='ing_list'>
          <p className='ing' style={{ whiteSpace: 'pre-line' }}>{specificRecipe.ingredients}</p>
        </p>
        <h3 className='ing_recipe'>Instructions</h3>
        <p className='ing_list'>
          <p className='instructions' style={{ whiteSpace: 'pre-line' }}>{specificRecipe.instructions}</p>
          <p className='outro'>{specificRecipe.outro}</p>
        </p>
      </div>
    );
  } else {
    return <p>Slow Network!</p>;
  }
}
