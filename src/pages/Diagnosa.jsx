import { Image } from "react-bootstrap"
import img from '../assets/pohon2.png'
import Pengingat from '../pages/Pengingat'

const diagnosa = () => {
    return (
    <div>
        <section id="diagnosa" class="diagnosa section">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-4">
                        <Image src={img} className="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 class="">Diagnosa penyakit tanaman hias dengan sekali scan</h1>
                        <p class="">Scan untuk mendapatkan informasi penyakit tentang tanaman hias anda</p>
                        <div class="d-flex">
                            <a href="#" class="btn-coba">Coba Sekarang</a>
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