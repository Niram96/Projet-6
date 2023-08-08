import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import '../../utils/styles/Banner.scss'

function Banner() {
    const location = useLocation()
    const whichLocation = location.pathname
    return (
        <header>
            <img src={logo} alt='Logo Kasa'/>
            <nav>
                <ul>
                    <li><Link to='/' className={whichLocation === '/' ? 'active-link' : ''}>Accueil</Link></li>
                    <li><Link to='/about' className={whichLocation === '/about' ? 'active-link' : ''}>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Banner