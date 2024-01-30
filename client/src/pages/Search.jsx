// SearchPage.jsx
import React, { useState, useEffect } from 'react';
import CardView from '../components/Card';
import '../components/styles.css';
import { Grid } from '@mui/material';
import ComboBox from '../components/SearchBar';
import axios from 'axios';
import '../components/styles.css';
import CardViewAPI from '../components/CardAPI';

const SearchPage = () => {
  const [popular, setPopular] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    // Fetch data based on the searchQuery
    if (searchQuery.trim() !== '') {
      // Use your actual API endpoint and key
      axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RAPID_API}&query=${searchQuery}&number=12`)
        .then((response) => {
          setPopular(response.data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [searchQuery]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RAPID_API}&number=12`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <>
    

      <ComboBox onSearch={setSearchQuery} />

      <div className="grid_view">
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
};

export default SearchPage;
