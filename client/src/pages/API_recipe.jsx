import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../components/styles.css';
import Parser from 'html-react-parser';

export default function API_Recipe() {
  const params = useParams();
  const [recipes, setRecipes] = useState({});
  const getRecipes = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RAPID_API}&includeNutrition=false`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setRecipes(data); // Assuming the data is an object containing recipe information
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  useEffect(() => {
    getRecipes(params.id);
  }, [params.id]);

  console.log(recipes);
  const summ = recipes.summary;
  const inst = recipes.instructions;
  const {extendedIngredients} = recipes;
  

  return (
    <>
      {Object.keys(recipes).length > 0 ? ( // Check if recipes object is not empty
        <>
          <div className='recipe_details'>
            <h1 style={{ textAlign: 'center' }}>{recipes.title}</h1>
          </div>
          <img className='image_recipe' src={recipes.image} alt={recipes.title} />
          <p className='quote_recipe' style={{ whiteSpace: 'pre-line' }}>{Parser(summ)}</p>
  
          {/* Additional components for displaying ingredients */}
          <h3 className='ing_recipe'>Ingredients</h3>
          <div className='ing_list'>
            <ul>
              {recipes.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>
                  {ingredient.original}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Additional components for displaying instructions */}
          <h3 className='ing_recipe'>Instructions</h3>
          <div className='ing_list'>
            <p className='instructions' style={{ whiteSpace: 'pre-line' }}>{Parser(inst)}</p>
            <p className='outro'>Your delicious {recipes.title} is ready, Enjoy!</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
  
}
