import { useGlobalContext } from "../context"
import { FiThumbsUp } from "react-icons/fi"

const Meals = () => {

    const {meals, loading, selectMeal, addToFavourites, removeFromFavourites} = useGlobalContext()

    if(loading) {
        return <section className="section">
            <h1>Loading . . .</h1>
        </section>
    }
    if (meals.length < 1) {
        return <section className="section">
          <h4>No meals matched your search term. Please try again.</h4>
        </section>
    }

    return (
       <section className="section-portion">
            {meals.map((singleMeal) => {
                const {idMeal, strMeal: title, strMealThumb: img_src} = singleMeal
                
                return <article key={idMeal} className="single-meal">
                    <img src={img_src} onClick={() =>  selectMeal(idMeal)}></img>
                    <footer>
                        <div className="title">{title}</div>
                        
                        <button><FiThumbsUp size="40px" color="white" onClick={() => addToFavourites(idMeal)}/></button>
                    </footer>
                </article>
            })}
       </section>
    )
}

export default Meals