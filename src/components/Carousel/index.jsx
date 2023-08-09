import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'
import accommodations from '../../datas/accommodations.json'
import '../../utils/styles/Carousel.scss'

let pictures = ''
let i = 0

function Carousel() {
    const siteLocation = useLocation()
    const path = siteLocation.pathname
    const id = path.substring(16, path.length)
    const [selectedPicture, setSelectedPicture] = useState('')
    
    for (let i=0; i<accommodations.length; i++) {
        const accomodation = accommodations[i]
        if (accomodation.id === id) {
            pictures = accomodation.pictures
        }
    }

    useEffect(() => {
        setSelectedPicture(pictures[0])
        i=0
    }, [])

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
                    <img className='arrow-back' src={arrowBack} alt='Précédent'></img>
                </button>
                <button className={pictures.length > 1 ? 'next-button-carousel' : 'inactive'} onClick={() => nextImg()}>
                    <img className='arrow-forward' src={arrowForward} alt='Suivant'></img>
                </button>
            </div>
            <p className={pictures.length > 1 ? 'photo-nb-carousel' : 'inactive'}>{i+1}/{pictures.length}</p>
        </div>
    )
}

export default Carousel