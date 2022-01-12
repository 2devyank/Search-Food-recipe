import React from 'react'

export default function Recipe({Title,calories,image,ingredients}) {
    return (
        <div>
            <h1>{Title}</h1>
            <ol>
                Recipe:
                {ingredients.map(ingredient=>(
                    <li key={ingredient.text}>{ingredient.text}</li>
    ))

                }
            </ol>
            <p>calories-{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

