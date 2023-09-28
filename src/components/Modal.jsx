import { useGlobalContext } from "../context"

const Modal = () => {
    const {selectedMeal, closeModal} = useGlobalContext()

    const {strMeal: title, strMealThumb: image, strSource:source, strInstructions: text} = selectedMeal
    
    return (
       <aside className="modal-overlay">
            <div className="modal-container">
                <img src={image} alt={title} className="img modal-img"/>
                <div className="modal-content">
                    <h1>{title}</h1>
                    <p>Cooking Instructions</p>
                    <p>{text}</p>
                    <a href={source} target="_blank">Original Source</a>
                    <button onClick={closeModal}>close</button>
                </div>
            </div>
       </aside>
    )
}

export default Modal