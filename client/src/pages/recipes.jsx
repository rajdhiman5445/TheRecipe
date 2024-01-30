import axios from 'axios';
import { useEffect, useState } from 'react';
import '../components/styles.css';

export default function Recipe_page() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getRecipe')
      .then((response) => {
        setRecipes(response.data)
      console.log(response.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
        {
                recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <div className='recipe_details'><h1 style={{ textAlign: 'center' }}>{recipe.title}</h1></div>

                        <img className='image_recipe' src={recipe.image_recipe} alt='dal makhani' />
                        <p className='quote_recipe'>Dal Makhani is a comforting, creamy and buttery lentil dish. The lentils and beans are cooked until tender, then we build up with layers of aromatic flavour. It makes the perfect side dish to go with any curry, or serve it as a main with some pilau rice and/or chapati.</p>

                        <h3 className='ing_recipe'>Ingredients</h3>
                        <p className='ing_list'>
                            <p className='sub-head'>For Cooking Lentils:</p>
                            <p className='sub-list'>1 cup whole black lentils (urad dal)
                                1/4 cup kidney beans (rajma),
                                4 cups water for soaking,
                                4 cups water for cooking,
                                1/2 teaspoon salt</p>

                            <p className='sub-head'>For Gravy:</p>
                            <p className='sub-list'>3 tablespoons ghee (clarified butter) or oil,
                                1 large onion, finely chopped,
                                2 teaspoons ginger-garlic paste,
                                2 large tomatoes, pureed,
                                1 teaspoon cumin seeds,
                                1 teaspoon red chili powder,
                                1/2 teaspoon turmeric powder,
                                1 tablespoon coriander powder,
                                1 tablespoon garam masala,
                                1/2 cup cream,
                                Salt to taste</p>

                            <p className='sub-head'>For Tempering (Tadka):</p>
                            <p className='sub-list'>2 tablespoons ghee,
                                1 teaspoon cumin seeds,
                                1 teaspoon red chili powder</p>

                            <p className='sub-head'>For Garnish:</p>
                            <p className='sub-list'>Fresh coriander leaves, chopped</p>

                        </p>
                        <h3 className='ing_recipe'>Instructions</h3>
                        <p className='ing_list'>
                            <ol>
                                <li>
                                    Soaking Lentils:
                                    Wash black lentils (urad dal) and kidney beans (rajma) under running water.
                                    Soak them in 4 cups of water overnight or for at least 6-8 hours.</li>
                                <li>
                                    Cooking Lentils:
                                    Drain the water from soaked lentils and kidney beans.
                                    In a pressure cooker, add lentils, kidney beans, 4 cups of water, and 1/2 teaspoon of salt.
                                    Pressure cook for about 15-20 minutes until lentils and beans are soft and cooked.</li>
                                <li>
                                    Preparing Gravy:
                                    Heat ghee or oil in a pan over medium heat.
                                    Add cumin seeds and let them splutter.
                                    Add chopped onions and sauté until golden brown.
                                    Add ginger-garlic paste and sauté for 1-2 minutes until the raw smell disappears.
                                    Add pureed tomatoes and cook until the oil separates from the masala.
                                    Add red chili powder, turmeric powder, coriander powder, and garam masala. Cook for 2-3 minutes.</li>
                                <li>
                                    Combining Lentils and Gravy:
                                    Add the cooked lentils and kidney beans to the tomato masala. Mix well.
                                    Add cream and salt to taste. Stir to combine. Simmer on low heat for 20-30 minutes, stirring occasionally, allowing the flavors to meld.</li>
                                <li>
                                    Tempering (Tadka):
                                    In a small pan, heat ghee for tempering.
                                    Add cumin seeds and let them splutter.
                                    Add red chili powder and immediately pour this tempering over the dal. </li>
                                <li>
                                    Garnish and Serve:
                                    Garnish the Dal Makhani with chopped fresh coriander leaves.
                                    Serve hot with naan, roti, or rice. </li>

                                <li>
                                    Enjoy your delicious homemade Dal Makhani! </li>
                            </ol>
                        </p>
                    </div>
                ))
            }

            <div>

            </div>
    </>
  );
}
