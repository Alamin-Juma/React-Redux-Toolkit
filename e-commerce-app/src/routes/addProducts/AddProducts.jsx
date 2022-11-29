import React, { useState, useRef,useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

import { AddProductsForm } from '../../components/products/addProdsForm/AddProductsForm'


export const AddProducts = () => {
    // const [title, setTitle] = useState('')
    // const [method, setMethod] = useState('')
    // const [cookingTime, setCookingTime] = useState('')
    // const [newIngredient, setNewIngredient] = useState('')
    // const [ingredients, setIngredients] = useState([])
    // const ingredientInput = useRef(null)
  
    // const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')
    // const navigate = useNavigate()
    
    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   console.log({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    //   postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    // }
  
    // const handleAdd = (e) => {
    //   e.preventDefault()
    //   //remove white spaces in the ingredient 
    //   const ing = newIngredient.trim()
  
    //   //make sure we have the ing data and avoid re-adding same ingredient 
    //   if (ing && !ingredients.includes(ing)) {
    //     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    //   }
    //   setNewIngredient('')
    //   ingredientInput.current.focus()
    // }

  return (
    <div>
        Hello  Add some projects here
    </div>
  )
}

