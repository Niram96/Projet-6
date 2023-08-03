import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../utils/styles/Banner.scss'

function Banner() {

    return (
        <div className='banner'>
            <img src={logo} alt='Logo Kasa'/>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/about'>À propos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Banner