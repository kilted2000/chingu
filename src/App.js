// import {useState, useEffect} from 'react';
// import './App.css';
// import axios from 'axios';
// import Recipe from './components/Recipe';

//  function App() {
//   const [recipes, setRecipes] = useState([]);
//   const [userSearch, setUserSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!userSearch) return;
//     if (loading) return;
//     setLoading(true);

//   const fetchRecipes = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
//       params: {
//         prefix: userSearch, 
//       },
//       headers: {
//         'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
//         'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       setRecipes(response.data.results);
//       console.log(response.data.results);
//     } catch (error) {
//       if (error.response) {
//         if (error.response.status === 429) {
//           console.error('Too many requests: Rate limit exceeded.');
    
//         } else {
//           console.error(`Request failed with status code ${error.response.status}`);
          
//         }
//       } else if (error.request) {
//         console.error('No response received');
       
//       } else {
//         console.error('An error occurred', error.message);
//   }

//   }};
//   setTimeout(() => {
//     fetchRecipes();
//     setLoading(false);
//   }, 3000); 
// },
//   fetchRecipes();
// },[userSearch]);

//   const handleSearch = () => {
//     setUserSearch(userSearch); 
//   };


//   return (
//     <div className="App">
//       <header className="App-header">
      
       
//       <h2>Recipes</h2>
//       <div>
//           <input
//             type="text"
//             placeholder="Search for recipes..."
//             value={userSearch}
//             onChange={(e) => setUserSearch(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </div>
//         {loading ? <p>Loading...</p> : null}
//       {recipes.map((recipe) => (
//           <Recipe key={recipe.id} title={recipe.name} />
//         ))}
      
      
//       </header>
//     </div>
//   );

      
//     }
//       export default App;

//importing needed components
      import { useState, useEffect, useCallback } from 'react';
      import './App.css';
      import axios from 'axios';
      import Recipe from './components/Recipe';
      //the app function that is the page
      function App() {
        const [recipes, setRecipes] = useState([]);
        const [userSearch, setUserSearch] = useState('');
        const [loading, setLoading] = useState(false);
      
        const fetchRecipes = useCallback( async () => {
          const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
            params: {
              prefix: userSearch,
            },
            headers: {
              'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            },
          };
      
          try {
            const response = await axios.request(options);
            setRecipes(response.data.results);
            console.log(response.data.results);
          } catch (error) {
            if (error.response) {
              if (error.response.status === 429) {
                console.error('Too many requests: Rate limit exceeded.');
              } else {
                console.error(`Request failed with status code ${error.response.status}`);
              }
            } else if (error.request) {
              console.error('No response received');
            } else {
              console.error('An error occurred', error.message);
            }
          }
        }, [userSearch]);

        // useEffect(() => {
        //   const fetchRecipesWrapper = () => {
        //     fetchRecipes();
        //   };
      
        //   if (!userSearch) return;
        //   if (loading) return;
        //   setLoading(true);
      
        //   setTimeout(() => {
        //     fetchRecipesWrapper();
        //     setLoading(false);
        //   }, 3000);
        // }, [userSearch, loading, fetchRecipes]);
        useEffect(() => {
        
          if (!userSearch) return;
          if (loading) return;
          setLoading(true);
      
          const delay = setTimeout(() => {
            fetchRecipes();
            setLoading(false);
          }, 3000);
        
          return () => clearTimeout(delay);
        }, [userSearch, loading, fetchRecipes]);
        //   setTimeout(() => {
        //     fetchRecipes();
        //     setLoading(false);
        //   }, 3000);
          
        // }, [userSearch, loading, fetchRecipes]);
     
      
        const handleSearch = () => {
          setUserSearch(userSearch);
        };
      
        return (
          <div className="App">
            <header className="App-header">
              <h2>Recipes</h2>
              <div>
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  value={userSearch}
               
                />
                <button onClick={handleSearch}>Search</button>
              </div>
              {loading ? <p>Loading...</p> : null}
              {recipes.map((recipe) => (
                <Recipe key={recipe.id} title={recipe.name} />
              ))}
            </header>
          </div>
        );
      }
      
      export default App;