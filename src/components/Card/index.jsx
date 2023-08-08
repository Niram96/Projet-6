import '../../utils/styles/Card.scss'

function Card({cover, title}) {
    return (
        <div className='card'>
                <div className='card-overlay'></div>
                <img className='card-img' src={cover} alt='Logement'/>
                <p className='card-txt'>{title}</p>
        </div>
    )
}

Card.defaultProps = {
    title: '',
    cover: ''
}

export default Card