import React from 'react'
import Meal from './Components/Meal'
import './Components/style.css'
import {Routes,Route} from 'react-router-dom'
import RecipeInfo from './Components/RecipeInfo'

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Meal/>} />
       <Route path="/:MealId" element={<RecipeInfo/>} />
     </Routes>
    </>
  )
}

export default App
