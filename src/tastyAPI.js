//connect tasty api to this react app
// 1. import axios
// 2. create a function that will fetch data from the api
// 3. create a component that will display the data
// 4. export the component
// 5. import the component into App.js


// import React from "react";
// import axios from "axios";



// const options = {
//     method: 'GET',
//     url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
//     params: {
//       prefix: 'chicken soup'
//     },
//     headers: {
//       'X_RAPIDAPI_KEY': 'X-RapidAPI-Key',
//       'X_RAPIDAPI_HOST': 'tasty.p.rapidapi.com'
//     }
//   };
  
  
//   axios.request(options).then(function (response) {
//   console.log(response.data);
//   }).catch(function (error) {
//   console.error(error);
//   });

//   const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
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