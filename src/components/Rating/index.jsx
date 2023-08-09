import { useLocation } from 'react-router-dom'
import activeStar from '../../assets/star-active.png'
import inactiveStar from '../../assets/star-inactive.png'
import accommodations from '../../datas/accommodations.json'
import '../../utils/styles/Rating.scss'


function Rating() {
    const siteLocation = useLocation()
    const path = siteLocation.pathname
    const id = path.substring(16, path.length)
    let rating = ''

    for (let i=0; i<accommodations.length; i++) {
        const accomodation = accommodations[i]
        if (accomodation.id === id) {
            rating = parseInt(accomodation.rating)
        }
    }

    if (rating === 1) {
        return (
            <div className='rating'>
                <img src={activeStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
            </div>
        )
    }
    else if (rating === 2) {
        return (
            <div className='rating'>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
            </div>
        )
    }
    if (rating === 3) {
        return (
            <div className='rating'>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={inactiveStar}></img>
                <img src={inactiveStar}></img>
            </div>
        )
    }
    if (rating === 4) {
        return (
            <div className='rating'>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={inactiveStar}></img>
            </div>
        )
    }
    if (rating === 5) {
        return (
            <div className='rating'>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
                <img src={activeStar}></img>
            </div>
        )
    }
}

export default Rating