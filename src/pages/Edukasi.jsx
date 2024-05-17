
import img from '../assets/tips.png'
import Figure from 'react-bootstrap/Figure';
import Testimoni from '../pages/Testimoni'

const edukasi = () => {
    return (
    <div>
        <section id="tips" className="tips section">
        <Figure className="figur-left">
                    <Figure.Image
                        width={871}
                        height={580}
                        alt=""
                        src={img}
                        className="figure-left"
                    />
                    </Figure>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-10 order-2 order-lg-1 d-flex flex-column justify-content-center " >
                        <h1 class="">Tambah wawasan anda tentang tanaman hias lebih luas</h1>
                        <p class="">Dirancang khusus untuk para penggemar tanaman hias untuk menambah pengetahuan tentang tanaman</p>
                        <div className="d-flex">
                            <a href="#" className="btn-coba">Coba Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Testimoni />
    </div>

    )
}

export default edukasi