import React from 'react'
import Banner from '../../components/Banner'
import Presentation from '../../components/Presentation';
import Card from '../../components/Card'
import Footer from '../../components/Footer';
import accommodations from '../../logements.json'

function Home() {
  return (
    <React.Fragment>
        <Banner />
        <Presentation />
        <div className='cards-container'>
          {accommodations.map((accommodation, index) => (
            <Card
            key={`${accommodation.id}-${index}`}
            cover={accommodation.cover}
            title={accommodation.title}
            />
          ))}
        </div>
        <Footer />
    </React.Fragment>
      )
}

export default Home;