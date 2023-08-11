import logoFooter from '../../assets/logo_footer.png'
import '../../utils/styles/Footer.scss'

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt='Logo Kasa'/>
            <p>© 2020 Kasa. All<br /> rights reserved</p>
        </footer>
    )
}

export default Footer