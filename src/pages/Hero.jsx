import Image from 'react-bootstrap/Image'
import img from '../assets/pohon.png'
import Button from 'react-bootstrap/Button'
import Informasi from '../pages/Informasi'

const hero = () => {
    return (
    <div>
        <section id="hero" className="hero section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 className="">Pantau kesehatan tanaman anda dalam sekali potret</h1>
                        <p className="">Dapatkan informasi tentang tanaman anda hanya dalam genggaman anda, begitu menyenangkan bukan?</p>
                        <div className="d-flex">
                            <Button className='btn-mulai'>Mulai Sekarang</Button>
                            <a href="" className="glightbox btn-cara d-flex align-items-center"><i className="bi bi-play-circle"></i><p1>Cara Kerjanya</p1></a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <Image src={img} className="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <Informasi />
    </div>

    )
}

export default hero