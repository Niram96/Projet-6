import React from "react"
import { useLocation } from "react-router-dom"
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import AccommodationDescription from "../../components/AccommodationDescription"
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import accommodations from '../../datas/accommodations.json'

function Accommodations() {
    const siteLocation = useLocation()
    const path = siteLocation.pathname
    const id = path.substring(16, path.length)
    let tags = ''
    let description = ''
    let equipments = []

    for (let i=0; i < accommodations.length; i++) {
        const accomodation = accommodations[i]
        if (accomodation.id === id) {
            tags = accomodation.tags
            description = accomodation.description
            equipments = accomodation.equipments
        }
    }

    const equipmentList = equipments.map((equipement) => (
        <span key={`${id}-${equipement}`}>{equipement}<br /></span>
        ))

    return (
    <React.Fragment>
        <Banner />
        <Carousel />
        <AccommodationDescription />
        <div className='tags-and-rating'>
                {tags.map((tag, index) =>
                <Tags 
                    key={`${id}-${tag}`}
                    tags={tag}
                />
                )}
                <Rating />
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
