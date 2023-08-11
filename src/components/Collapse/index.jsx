import { useEffect, useState } from 'react'
import arrow from '../../assets/arrow.png'
import arrowMin from '../../assets/arrow-min.png'
import '../../utils/styles/Collapse.scss'

function Collapse({title, text}) {
const[isOpen, setOpen] = useState(false)
const [isMobile, setIsMobile] = useState(false)
 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}  

useEffect(() => {
  window.addEventListener("resize", handleResize)
})

return (
        <div className='collapse'>
            <div className='collapse-title-bar'>
                <h1>{title}</h1>
                <button className='collapse-button' onClick={() => isOpen ? setOpen(false) : setOpen(true)}>
                    {isMobile ? 
                    <img className={isOpen ? 'arrow-opening' : 'arrow-closing'} src={arrowMin} alt='Bouton ouvrir/fermer'></img>
                    : 
                    <img className={isOpen ? 'arrow-opening' : 'arrow-closing'} src={arrow} alt='Bouton ouvrir/fermer'></img>
                    }
                </button>
            </div>
            <div className={isOpen ? 'about-text text-opening' : 'about-text text-closing'}><p>{text}</p></div>
        </div>
    )
}

export default Collapse