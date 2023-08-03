import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../utils/styles/Banner.scss'

function Banner() {

    return (
        <header>
            <img src={logo} alt='Logo Kasa'/>
            <nav>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/about'>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Banner