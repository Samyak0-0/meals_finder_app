import Search from './components/Search';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Favourties from './components/Favourties';

import { useGlobalContext } from './context';

export default function App() {

    const { showModal, favourites } = useGlobalContext()
    return (
        <main>
            <Search />
            {favourites.length>0 && <Favourties/>}
            <Meals />
            {showModal && <Modal />}
        </main>
    )
}