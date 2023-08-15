import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import '../../utils/styles/Banner.scss'

function Banner() {
    const [width, setWidth] = useState(window.innerWidth);

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

    const location = useLocation()
    const whichLocation = location.pathname
    
    return (
        <header>
            <img src={logo} alt='Logo Kasa'/>
            <nav>
                <ul>
                    <li><Link to='/' className={whichLocation === '/' ? 'active-link' : ''}>{isMobile ? 'ACCUEIL' : 'Accueil'}</Link></li>
                    <li><Link to='/about' className={whichLocation === '/about' ? 'active-link' : ''}>{isMobile ? 'A PROPOS' : 'A Propos'}</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Banner