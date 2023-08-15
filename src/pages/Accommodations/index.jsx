import React from "react"
import { useState, useEffect } from "react"
import { useLocation, Navigate } from "react-router-dom"
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import accommodations from '../../datas/accommodations.json'
import '../../utils/styles/Accommodation.scss'

function Accommodations() {
    const [width, setWidth] = useState(window.innerWidth);
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
    let tags = []
    let isExist = false

    for (let i=0; i < accommodations.length; i++) {
        const accommodation = accommodations[i]
        if (accommodation.id === id) {
            isExist = true
            title = accommodation.title
            pictures = accommodation.pictures
            description = accommodation.description
            host = accommodation.host
            rating = accommodation.rating
            location = accommodation.location
            equipments = accommodation.equipments
            tags = accommodation.tags
        }
    }

    const equipmentList = equipments.map((equipment) => (
        <span key={`${id}-${equipment}`}>{equipment}<br /></span>
    ))


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    const isMobile = width <= 800;

    if (!isExist) {
        return (
            <Navigate to='/error'></Navigate>
        )
    }

    if (isMobile) {
        return (
            <React.Fragment>
            <Banner />
            <Carousel pictures={pictures}/>
            <div className='accommodation-title-location'>
                    <div className='title-and-location'>
                        <h1>{title}</h1>
                        <h2>{location}</h2>
                    </div>
            </div>
            <div className='tags-div'>
                    {tags.map((tag) =>
                    <Tags 
                        key={`${id}-${tag}`}
                        tags={tag}
                    />
                    )}
            </div>
            <div className='rating-and-host'>
                <Rating id={id} rating={rating}/>
                <p>{host.name}</p>
                <img src={host.picture} alt='Propriétaire'></img>
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
    else {
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
                    {tags.map((tag) =>
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
}

export default Accommodations