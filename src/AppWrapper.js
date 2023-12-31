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
      // import { useState, useEffect, useCallback } from 'react';
      // import './App.css';
      // import {
      //   useQuery,
      //   useMutation,
      //   useQueryClient,
      //   QueryClient,
      //   QueryClientProvider,
      // } from '@tanstack/react-query'
      // import axios from 'axios';
      // import Recipe from './components/Recipe';

      // const queryClient = new QueryClient()
      // //the app function that is the page itself
      // function App() {
      //   //montiors state in the app 
      //   //recipes state may not be needed
      //   const [recipes, setRecipes] = useState([]);
      //   //state in search bar
      //   const [userSearch, setUserSearch] = useState('');
      //   //monitors is page is loading or not
      //   const [loading, setLoading] = useState(false);
      
      //   //gets recipes from the api
      //   //useCallback to stop constant rerendering
      //   const fetchRecipes = useCallback( async () => {
      //     //code snippet from api docs
      //     const options = {
      //       //get request
      //       method: 'GET',
      //       //api endpoint
      //       url: 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=',
      //       params: {
      //         //what is being searched for
      //         prefix: userSearch,
      //       },
      //       headers: {
      //         //api key and api host stored in env file
      //         'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
      //         'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      //       },
      //     };
      
      //     try {
      //       const response = await axios.request(options);
      //       setRecipes(response.data.results);
      //       console.log(response.data.results);
      //       //error handling
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
      //       }
      //     }//rerenders only when userSearch changes
      //   }, [userSearch]);

      //   // useEffect(() => {
      //   //   const fetchRecipesWrapper = () => {
      //   //     fetchRecipes();
      //   //   };
      
      //   //   if (!userSearch) return;
      //   //   if (loading) return;
      //   //   setLoading(true);
      
      //   //   setTimeout(() => {
      //   //     fetchRecipesWrapper();
      //   //     setLoading(false);
      //   //   }, 3000);
      //   // }, [userSearch, loading, fetchRecipes]);
      //   useEffect(() => {
        
      //     if (!userSearch) return;
      //     if (loading) return;
      //     setLoading(true);
      
      //     const delay = setTimeout(() => {
      //       fetchRecipes();
      //       setLoading(false);
      //     }, 3000);
        
      //     return () => clearTimeout(delay);
      //   }, [userSearch, loading, fetchRecipes]);
      //   //   setTimeout(() => {
      //   //     fetchRecipes();
      //   //     setLoading(false);
      //   //   }, 3000);
          
      //   // }, [userSearch, loading, fetchRecipes]);
     
      
      //   const handleSearch = () => {
      //     setUserSearch(userSearch);
      //   };
      
      //   return (
      //     <div className="App">
      //       <header className="App-header">
      //         <h2>Recipes</h2>
      //         <div>
      //           <input
      //             type="text"
      //             placeholder="Search for recipes..."
      //             value={userSearch}
               
      //           />
      //           <button onClick={handleSearch}>Search</button>
      //         </div>
      //         {loading ? <p>Loading...</p> : null}
      //         {recipes.map((recipe) => (
      //           <Recipe key={recipe.id} title={recipe.name} />
      //         ))}
      //       </header>
      //     </div>
      //   );
      // }
      import React from "react";
import { QueryClient, QueryClientProvider,useQuery } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

const retrieveRecipes = async (searchTerm) => {
    const options = {
         
          method: 'GET',
          
          url: 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=',
        
    
          headers: {
           
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            
          },
        };
    const response = await axios.request(
      options
    );
    const filteredRecipes = response.data.results.filter((recipe) =>
    recipe.title.toLowerCase().includes("chicken")
  );
  return filteredRecipes.slice(0, 20);
};
//check rerendering and api key
const App = () => {
  //const [userSearch] = React.useState("chicken");
  const { data: recipes, error, isLoading } = useQuery(["recipes", 'chicken'], () =>
    retrieveRecipes('chicken'),
    {
      cacheTime: 600000, // Cache data for 600 seconds (10 minutes)
      staleTime: 60000, // Consider data stale after 60 seconds
      enabled: true, 
    }
  );

  if (isLoading) return <div>Fetching recipes...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
};

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}> 
      <App />
    </QueryClientProvider>
  );
}

export default AppWrapper;