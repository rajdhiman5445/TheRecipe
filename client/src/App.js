import './App.css';
import Layout from './components/Layout';
import Recipe_page from './pages/Recipe_page';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom'
import PopularRecipes from './pages/Popular';
import SearchPage from './pages/Search';
import AllRecipes from './pages/All';
import API_Recipe from './pages/API_recipe';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Home />
          } />
          <Route path="/popular" element={
            <PopularRecipes />
          } />
          <Route path="/search" element={
            <SearchPage />
          } />
          <Route path="/dinner" element={
            <div>dinner</div>
          } />
          <Route path="/all" element={
            <AllRecipes />
          } />
          <Route path={"/recipes/:id"} element={<Recipe_page />} />
          <Route path={"/recipes/:title/:id"} element={<API_Recipe />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
