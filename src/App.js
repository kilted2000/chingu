import {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
  fetch(`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup`)
  .then((response) => response.json())
  .then((data) => setRecipes(data))
  }
  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      
       
      <h2>Recipes</h2>
       
          <Recipe
            // key={recipes.id} 
            // id={recipes.id}
            // title={recipes.title} 
            //body={results.body} 
           
          />
      
      
      </header>
    </div>
  );
//   const fetchRecipes = async () => {  
//     const url = `https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${recipes}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '109ea4696fmsh3a46f9a36cab73bp1be7bejsn6fa98eee3d63',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
    // const response = await fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": 'process.env.X_RAPID_API_KEY',
    //     "x-rapidapi-host": "tasty.p.rapidapi.com"
    //   }
    // })
    // const data = await response.json();
    // setRecipes(data.results);
  }


  
//}

export default App;
