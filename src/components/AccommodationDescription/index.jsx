import React from 'react'
import { useLocation } from 'react-router-dom'
import accommodations from '../../datas/accommodations.json'
import '../../utils/styles/AccommodationDescription.scss'

function AccommodationDescription() {
    const siteLocation = useLocation()
    const path = siteLocation.pathname
    const id = path.substring(16, path.length)
    let title = ''
    let location = ''
    let host = {}

    for (let i=0; i<accommodations.length; i++) {
        const accomodation = accommodations[i]
        if (accomodation.id === id) {
            title = accomodation.title
            location = accomodation.location
            host = accomodation.host
        }
    }

    return (
        <React.Fragment>
            <div className='accommodation-description'>
                <div className='title-and-location'>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                </div>
                <div className='host'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt='Host'></img>
                </div>
            </div>
         </React.Fragment>
    )

}

export default AccommodationDescription