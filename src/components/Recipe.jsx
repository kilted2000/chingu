import {useState} from "react";

export default function Recipe({results}){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
function recSearch(e){
    e.preventDefault();
    results.addRecipe(title, body);
    setTitle('');
    setBody('');
    // e.preventDefault();
    // const recipe = e.target.elements.recipes.value;
    // console.log(recipe);
    // const url = `https://tasty.p.rapidapi.com/search?q=${recipe}&app_key=${process.env.X_RAPID_API_KEY}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    console.log(results);
}
  
    return(
<>
<div>
    <form>
    <input type="text" name="recipes" onSubmit={recSearch}/>
    <button type="submit">Search</button>
    </form>
    <ol>
        <li>{results}</li>
    </ol>
</div>
</>
    );
}