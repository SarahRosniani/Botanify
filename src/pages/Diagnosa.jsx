import { Image } from "react-bootstrap"
import img from '../assets/pohon2.png'
import Pengingat from '../pages/Pengingat'

const diagnosa = () => {
    return (
    <div>
        <section id="diagnosa" className="diagnosa section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <Image src={img} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 className="">Diagnosa penyakit <br/> tanaman hias dengan <br/> sekali scan</h1>
                        <p className="">Scan untuk mendapatkan informasi penyakit tentang tanaman hias anda</p>
                        <div className="d-flex">
                            <a href="#" className="btn-coba">Coba Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pengingat />
    </div>

    )
}

export default diagnosa