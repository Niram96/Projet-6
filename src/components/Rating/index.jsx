import activeStar from '../../assets/star-active.png'
import inactiveStar from '../../assets/star-inactive.png'
import '../../utils/styles/Rating.scss'

function Rating({id, rating}) {
    const starRating = []
    for (let i=1; i <= 5; i++) {
        if (i <= rating) {
            starRating.push(<img key={`${id}-star-${i}`} src={activeStar} alt='étoile'></img>)
        } else {
            starRating.push(<img key={`${id}-star-${i}`} src={inactiveStar} alt='étoile vide'></img>)
        }
    }
    return (<span className='rating'>{starRating}</span>)
}

export default Rating