import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {

    const[text, setText] = useState('')
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext()
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text) {
            setSearchTerm(text)
        }
    }
    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

    return (
        <header className="search-container">
            <form>
                <input type="text" placeholder="type your favourite meal" value={text} onChange={handleChange} className="search-bar" />
                <button type="submit" className="btn" onClick={handleSubmit}>Search</button>
                <button type="button" className="btn-rndm" onClick={handleRandomMeal}>Suprise me!</button>
            </form>
        </header>
    )
}

export default Search