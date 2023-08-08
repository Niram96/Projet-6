import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner';
import img404 from '../../assets/404.jpg'
import Footer from '../../components/Footer';
import '../../utils/styles/Error.scss';

function Error() {
    return (
        <React.Fragment>
            <Banner />
            <div className='error-div'>
                <img src={img404} alt='Erreur 404'></img>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>            
            <Footer />
        </React.Fragment>
    )
}

export default Error