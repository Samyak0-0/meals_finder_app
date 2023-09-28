import { useGlobalContext } from "../context"

const Favourties = () => {

    const { favourites, addToFavourites, removeFromFavourites, selectMeal } = useGlobalContext()
    return (
        <section className="favourites">
            <h1 id="fav">Favourites</h1>
            <div className="favourites-container">
                {favourites.map((item) => {
                    const{idMeal, strMealThumb: image} = item

                    return <div key={idMeal} className="favourite-item">
                        <img src={image} onClick={() => selectMeal(idMeal, true)} className="img fav-img" />
                        <button className="remove-btn" onClick={() => removeFromFavourites(idMeal)}>remove</button>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Favourties