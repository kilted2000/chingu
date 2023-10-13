//connect tasty api to this react app
// 1. import axios
// 2. create a function that will fetch data from the api
// 3. create a component that will display the data
// 4. export the component
// 5. import the component into App.js
// 6. use the component in App.js
// 7. test to see if it works
// 8. if it works, style it
// 9. if it doesn't work, debug it
// 10. if you can't debug it, ask for help
// 11. if you can't get help, move on to the next step

import React from "react";
import axios from "axios";



const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: {
      prefix: 'chicken soup'
    },
    headers: {
      'X_RAPIDAPI_KEY': 'X-RapidAPI-Key',
      'X_RAPIDAPI_HOST': 'tasty.p.rapidapi.com'
    }
  };
  
  
  axios.request(options).then(function (response) {
  console.log(response.data);
  }).catch(function (error) {
  console.error(error);
  });