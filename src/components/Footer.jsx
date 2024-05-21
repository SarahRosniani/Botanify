import '../dist/css/main.css'
import Image from 'react-bootstrap/Image'
import img from '../assets/send.png'

const footer = () => {
    return (
    <div>
        <footer id="footer" className="footer">
        <div className="container footer-top">
            <div className="row gy-4">
                <div className="col-lg-4 col-md-6 footer-botanify">
                    <a href="index.html" className="logo d-flex align-items-center me-auto ">
                        <Image src="/logo.png" alt="" />
                    </a>
                <div className="footer-botanify pt-3">
                    <p>Botanify merupakan aplikasi karya anak bangsa. Botanify membantu anda menemukan penyakit pada tanaman anda</p>
                </div>
                <div className="social-links d-flex">
                    <a href=""><i class="bi bi-linkedin"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                </div>
            </div>
                <div className="col-lg-2 col-md-3 footer-links">
                <h4>Sitemap</h4>
                <ul>
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#">Fitur</a></li>
                    <li><a href="#">Informasi</a></li>
                    <li><a href="#">Kontak</a></li>
                </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Karir</a></li>
                    <li><a href="#">Bantuan</a></li>
                    <li><a href="#">API</a></li>
                </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Resources</h4>
                    <ul>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-3 footer-links">
                    <h4>Keep in touch</h4>
                    <p>Never miss any news from us, subscribe now</p>
                    <form action="" method="post">
                        <input type="email" name="email" placeholder="Your Email"/>
                            <button className="footer-btn">
                            <Image src={img}/>
                            </button>
                    </form>
                </div>
            </div>
        
        
        <div className="container copyright text-left mt-4">
            <p>© <span>2024 Botanify All right reserved.</span></p>
            <p>12,290,526 <span>tanaman telah discan dalam 3 bulan</span></p>
        </div>
        </div>
        </footer>
    </div>

    )
}

export default footer