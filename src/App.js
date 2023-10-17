import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './components/Recipe';

 function App() {
  const [recipes, setRecipes] = useState([]);
  const [userSearch, setUserSearch] = useState('');


  useEffect(() => {
  const fetchRecipes = async () => {
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
      params: {
        prefix: userSearch, 
      },
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
    } catch (error) {
      if (error.response) {
        console.error(`Request failed with status code ${error.response.status}`);
      } else if (error.request) {
        console.error('No response received');
      } else {
        console.error('An error occurred', error.message);
    }
  }

  };

  fetchRecipes();
},[userSearch]);



  return (
    <div className="App">
      <header className="App-header">
      
       
      <h2>Recipes</h2>
      <div>
          <input
            type="text"
            placeholder="Search for recipes..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      {recipes.map((recipe) => (
          <Recipe key={recipe.id} title={recipe.name} />
        ))}
      
      
      </header>
    </div>
  );

      }

      export default App;