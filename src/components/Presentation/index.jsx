import imgHome from '../../assets/img_home.jpg'
import imgAbout from '../../assets/img_about.jpg'
//import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../utils/styles/Presentation.scss'

function Presentation() {
    const location = useLocation()
    const whichLocation = location.pathname
    let img = ''
    let alt = ''
    let isHome = 0
    const altImgHome = "Littoral rocheux"
    const altImgAbout = "Vallée montagneuse"
    whichLocation === '/' ? ((img = imgHome) && (alt = altImgHome)) && (isHome = 1) : ((img = imgAbout) && (alt = altImgAbout) && (isHome = 0))

    return (
    <div className='presentation'>
        <div className='presentation-overlay'></div>
        <img className='presentation-img' src={img} alt={alt}/>
        {isHome ? <p className='presentation-txt'>Chez vous, partout et ailleurs</p> : null}
    </div>
  )
}

export default Presentation

