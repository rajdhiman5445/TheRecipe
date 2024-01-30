// ComboBox.jsx
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const topRecipes = [
    { label: "Dal Makhani" },
    { label: "Red Sauce Pasta" },
    { label: "Chicken Curry" },
    { label: "Vegetable Biryani" },
    { label: "Paneer Tikka" },
    { label: "Butter Chicken" },
    { label: "Palak Paneer" },
    { label: "Aloo Gobi" },
    { label: "Chole Bhature" },
    { label: "Matar Paneer" },
    { label: "Tandoori Chicken" },
    { label: "Samosa" },
    { label: "Dosa" },
    { label: "Chicken Biryani" },
    { label: "Gulab Jamun" },
    { label: "Chana Masala" },
    { label: "Fish Curry" },
    { label: "Aloo Paratha" },
    { label: "Chicken Korma" },
    { label: "Rajma Chawal" },
    { label: "Pav Bhaji" },
    { label: "Mango Lassi" },
    { label: "Aloo Tikki" },
    { label: "Chicken Tikka Masala" },
    { label: "Pani Puri" },
    { label: "Malai Kofta" },
    { label: "Vada Pav" },
    { label: "Vegetable Pakora" },
    { label: "Pulao" },
    { label: "Chicken Shawarma" },
    { label: "Dhokla" },
    { label: "Shrimp Curry" },
    { label: "Kadai Chicken" },
    { label: "Egg Curry" },
    { label: "Bhindi Masala" },
    { label: "Chicken Fried Rice" },
    { label: "Lamb Rogan Josh" },
    { label: "Mango Chicken" },
    { label: "Pesarattu" },
    { label: "Tandoori Roti" },
    { label: "Chicken Noodle Soup" },
    { label: "Malabar Paratha" },
    { label: "Vegetable Korma" },
    { label: "Mutton Biryani" },
    { label: "Kheer" },
    { label: "Aloo Matar" },
    { label: "Chicken 65" },
    { label: "Gajar Ka Halwa" },
    { label: "Rasgulla" }
  ];
  

const ComboBox = ({ onSearch }) => {
  const handleInputChange = (_, value) => {
    onSearch(value);
  };


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
      }}
    >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={[]} 
      sx={{
        width: 600,
        borderRadius: '5px',
        marginBottom: '20px',
      }}
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label="Search Recipes.." />}
    />
    </div>
  );
};

export default ComboBox;
