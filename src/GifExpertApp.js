import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const categoriesInit = [];

    const [categories, setCategories] = useState(categoriesInit)
/* 
    const handleAdd = () => {
        
        //setCategories([...categories,'HunterXHunter']);
        setCategories(cats => [...cats,'HunterXHunter']);
          <button onClick={handleAdd}>Agregar</button>
          <li key={ category }>{ category }</li>
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>

          
        
            <ol>
                { 
                    categories.map(category => 
                        
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>
        </div>
    );
}



