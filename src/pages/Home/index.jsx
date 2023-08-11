import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner'
import Presentation from '../../components/Presentation';
import Card from '../../components/Card'
import Footer from '../../components/Footer';
import accommodations from '../../datas/accommodations.json'

function Home() {
  return (
    <React.Fragment>
        <Banner />
        <Presentation />
        <div className='cards-container'>
          {accommodations.map((accommodation, index) => (
            <Link to={{ pathname: `/accommodations/${accommodation.id}`}} key={`Link-${accommodation.id}-${index}`}>
              <Card 
              key={`${accommodation.id}-${index}`}
              cover={accommodation.cover}
              title={accommodation.title}
              />
            </Link>
          ))}
        </div>
        <Footer />
    </React.Fragment>
      )
}

export default Home;