import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import '../../utils/styles/Collapse.scss'

function Collapse({title, text}) {
    const[isOpen, setOpen] = useState(false)
    return (
        <div className='collapse'>
            <div className='collapse-title-bar'>
                <h1>{title}</h1>
                <button className='collapse-button' onClick={() => isOpen ? setOpen(false) : setOpen(true)}>
                    <img className={isOpen ? 'arrow-opening' : 'arrow-closing'} src={arrow} alt='Bouton ouvrir/fermer'></img>
                </button>
            </div>
            <div className={isOpen ? 'about-text text-opening' : 'about-text text-closing'}><p>{text}</p></div>
        </div>
    )
}

export default Collapse