
import img from '../assets/hp.png'
import Figure from 'react-bootstrap/Figure';
import Edukasi from '../pages/Edukasi'


const pengingat = () => {
    return (
    <div>
        <section id="pengingat" className="pengingat section">
            <div className="container">
                    <Figure className="figure-right">
                        <Figure.Image
                            width={471}
                            height={480}
                            alt="171x180"
                            src={img}
                        />
                    </Figure>
                <div class="row gy-4">
                    <div class="col-lg-10 order-5 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 class="">Atur pengingat untuk jadwal penyiraman tanaman anda</h1>
                        <p class="">Tentukan jadwal penyiraman secara rutin sehingga anda tidak lupa untuk menyiram tanaman anda</p>
                        <div class="d-flex">
                            <a href="#" class="btn-coba1">Coba Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Edukasi />
    </div>

    )
}

export default pengingat