import { useLocation } from 'react-router-dom'
import homeImg from '../../assets/img_home.jpg'
import aboutImg from '../../assets/img_about.jpg'
import '../../utils/styles/Presentation.scss'

function Presentation() {
    const location = useLocation()
    const whichLocation = location.pathname
    let img = ''
    let alt = ''
    let isHome = 0
    const homeImgAlt = "Littoral rocheux"
    const aboutImgAlt = "Vallée montagneuse"
    whichLocation === '/' ? ((img = homeImg) && (alt = homeImgAlt)) && (isHome = 1) : ((img = aboutImg) && (alt = aboutImgAlt) && (isHome = 0))

    return (
    <div className='presentation'>
        <div className='presentation-overlay'></div>
        <img className='presentation-img' src={img} alt={alt}/>
        {isHome ? <p className='presentation-txt'>Chez vous, <br />partout et ailleurs</p> : null}
    </div>
  )
}

export default Presentation

