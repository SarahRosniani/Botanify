import '../dist/css/main.css'
import Image from 'react-bootstrap/Image'

const navbar = () => {
    return (
    <div>
        <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="index.html" className="logo d-flex align-items-center me-auto " width="100" height="100" viewbox="0 0 24 24">
        <Image src="/logo.png" alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
        <ul>
            <li><a href="#hero" class="">Beranda</a></li>
            <li className="dropdown" id="dropdown-basic"><a href="#"><span>Fitur</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
            </ul>
            </li>
            <li><a href="#informasi">Informasi</a></li>
            <li><a href="#kontak">Kontak</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-login" href="#about">Login</a>

    </div>
    </header>
    </div>
    )
}

export default navbar