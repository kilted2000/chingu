import { useState } from "react";

export default function Recipe({ingredients}){
 const [recipe, setRecipe] = useState('');
  
    return(
<>
<div>
    <input type="text" />
    <ol>
        <li>{ingredients}</li>
    </ol>
</div>
</>
    );
}