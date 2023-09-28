import React from 'react'
import axios from "axios";

import './style.css';
import { useState, useEffect, useContext } from "react";
import App from './App';

const AppContext = React.createContext()


const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl  = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavouritesFromLocalStorage = () => {
    let favourites = localStorage.getItem('favourites')

    if(favourites) {
        favourites = JSON.parse(favourites)
    } else {
        favourites = []
    }
    return favourites
}


const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const [showModal, setShowModal] = useState(false)

    const [selectedMeal, setSelectedMeal] = useState(null)

    const[favourites, setFavourites] = useState(getFavouritesFromLocalStorage())

    const selectMeal= (idMeal, favouriteMeal) => {
        let meal;
        if(favouriteMeal) {
            meal = favourites.find((meal) => meal.idMeal == idMeal)
        } else {
            meal = meals.find((meal) => meal.idMeal == idMeal)
        }
        
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            const {data} = await axios(url)
            if(data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([])
            }
            
    
        } catch(err) {
            console.log(err)
        }
        setLoading(false)
    }

    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }

    const addToFavourites = (idMeal) => {
       
        const alreadyFavourites = favourites.find((meal) => meal.idMeal === idMeal)
        if(alreadyFavourites) return
        const meal = meals.find((meal) => meal.idMeal === idMeal)
        const updateFavourites = [...favourites, meal];
        setFavourites(updateFavourites)
        localStorage.setItem('favourites', JSON.stringify(updateFavourites))
    }

    const removeFromFavourites = (idMeal) => {
        const updatedFavourites = favourites.filter((meal) => meal.idMeal !== idMeal)
        setFavourites(updatedFavourites)
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites))
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])
    useEffect(() => {
        if(!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    return (<AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, addToFavourites, removeFromFavourites, favourites}}>
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}