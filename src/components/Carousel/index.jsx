import { useEffect, useState } from 'react'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'
import arrowBackMin from '../../assets/arrow_back-min.png'
import arrowForwardMin from '../../assets/arrow_forward-min.png'
import '../../utils/styles/Carousel.scss'

let i = 0

function Carousel({pictures}) {
    const [selectedPicture, setSelectedPicture] = useState('')
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

    useEffect(() => {
        setSelectedPicture(pictures[0])
        i=0
    }, [pictures])

    function previousImg() {
        if (selectedPicture === pictures[0]) {
            setSelectedPicture(pictures[pictures.length - 1])
            i = pictures.length - 1
        }
        else {
            setSelectedPicture(pictures[i-1])
            i--
        }
    }

    function nextImg() {
        if (selectedPicture === pictures[pictures.length - 1]) {
            setSelectedPicture(pictures[0])
            i = 0
        }
        else {
            setSelectedPicture(pictures[i+1])
            i++
        }
    }

    return (
        <div className='carousel'>
            <img src={selectedPicture} alt='Location immobilière'></img>
            <div className='carousel-buttons'>
                <button className={pictures.length > 1 ? 'previous-button-carousel' : 'inactive'} onClick={() => previousImg()}>
                    {isMobile ?
                    <img className='arrow-back-min' src={arrowBackMin} alt='Précédent'></img>
                    :
                    <img className='arrow-back' src={arrowBack} alt='Précédent'></img>
                    }
                </button>
                <button className={pictures.length > 1 ? 'next-button-carousel' : 'inactive'} onClick={() => nextImg()}>
                    {isMobile ?
                    <img className='arrow-forward-min' src={arrowForwardMin} alt='Suivant'></img>
                    :
                    <img className='arrow-forward' src={arrowForward} alt='Suivant'></img>
                    }
                </button>
            </div>
            <p className={pictures.length > 1 ? 'photo-nb-carousel' : 'inactive'}>{i+1}/{pictures.length}</p>
        </div>
    )
}

export default Carousel