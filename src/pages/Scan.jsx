import { Image } from "react-bootstrap"
import img from '../assets/unggah/bunga.png'
import img2 from '../assets/unggah/bungaa.png'
import img3 from '../assets/unggah/bungaaa.png'
import img4 from '../assets/unggah/bungaaaa.png'

const Scan = () => {
    return (
    <div>
        <section id="unggah" className="parent-container">
            <div className="center-container">
                <h1 className="title1">Diagnosa Sekarang</h1>
                <div className="subtitle1">Unggah foto tanaman anda kedalam kotak dan dapatkan informasi penyakit tentang tanaman tersebut</div>
                <div className="container1">
                    <div className="upload-section">
                        <div className="upload-button">
                        <a href="/upload" className="button-text">Unggah Foto</a>
                        </div>
                        <div className="instruction-text">Unggah foto tanaman anda</div>
                    </div>
                    <div className="divider"></div>
                    <div className="sample-photos">
                        <div className="sample-text">Atau coba dengan beberapa foto ini:</div>
                            <div className="photo-thumbnails">
                                <Image className="photo-thumbnail" src={img} />
                                <Image className="photo-thumbnail" src={img2} />
                                <Image className="photo-thumbnail" src={img3} />
                                <Image className="photo-thumbnail" src={img4} />
                            </div>
                    </div>
                </div>
            </div>      
        </section>
    </div>
    )
}

export default Scan