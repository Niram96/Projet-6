import { useLocation } from 'react-router-dom'
import homeImg from '../../assets/img_home.jpg'
import aboutImg from '../../assets/img_about.jpg'
import '../../utils/styles/Presentation.scss'

function Presentation() {
    const location = useLocation()
    const whichLocation = location.pathname
    let isHome = false
    let img = ''
    let alt = ''
    const homeImgAlt = "Littoral rocheux"
    const aboutImgAlt = "Vallée montagneuse"

    whichLocation === '/' ? ((img = homeImg) && (alt = homeImgAlt)) && (isHome = true) : ((img = aboutImg) && (alt = aboutImgAlt) && (isHome = false))

    return (
    <div className={isHome ? 'presentation' : 'presentation presentation-about-mobile'}>
        <div className={isHome ? 'presentation-overlay' : 'presentation-overlay presentation-overlay-about-mobile'}></div>
        <img className={isHome ? 'presentation-img' : 'presentation-img presentation-img-about-mobile'} src={img} alt={alt}/>
        {isHome ? <p className='presentation-txt'>Chez vous, <br />partout et ailleurs</p> : null}
    </div>
  )
}

export default Presentation