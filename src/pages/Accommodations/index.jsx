import React from "react"
import { useLocation } from "react-router-dom"
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import accommodations from '../../datas/accommodations.json'
import '../../utils/styles/Accommodation.scss'

function Accommodations() {
    const siteLocation = useLocation()
    const path = siteLocation.pathname
    const id = path.substring(16, path.length)
    let title = ''
    let pictures = []
    let description = ''
    let host = {}
    let rating = ''
    let location = ''
    let equipments = []
    let tags = ''

    for (let i=0; i < accommodations.length; i++) {
        const accomodation = accommodations[i]
        if (accomodation.id === id) {
            title = accomodation.title
            pictures = accomodation.pictures
            description = accomodation.description
            host = accomodation.host
            rating = accomodation.rating
            location = accomodation.location
            equipments = accomodation.equipments
            tags = accomodation.tags
        }
    }

    const equipmentList = equipments.map((equipment) => (
        <span key={`${id}-${equipment}`}>{equipment}<br /></span>
    ))

    return (
    <React.Fragment>
        <Banner />
        <Carousel pictures={pictures}/>
        <div className='accommodation-title-location-and-host'>
                <div className='title-and-location'>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                </div>
                <div className='host'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt='Propriétaire'></img>
                </div>
        </div>
        <div className='tags-and-rating'>
                {tags.map((tag, index) =>
                <Tags 
                    key={`${id}-${tag}`}
                    tags={tag}
                />
                )}
                <Rating id={id} rating={rating}/>
        </div>
        <div className="description-and-equipments">
            <Collapse
                key={`${id}-'description'`}
                title = "Description"
                text = {description}
            />
            <Collapse
                key={`${id}-'equipments'`}
                title = "Équipements"
                text = {equipmentList}
            />
        </div>   
        <Footer />
    </React.Fragment>
    )
}

export default Accommodations