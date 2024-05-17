import { Image } from "react-bootstrap"
import img from '../assets/f1.png'
import img1 from '../assets/f2.png'
import img2 from '../assets/f3.png'
import Diagnosa from '../pages/Diagnosa'

const informasi = () => {
    return (
    <div>
        <section id="informasi" className="informasi">
            <div className="container flex">
                <div className="row gy-5">
                    <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 className="">Ketahui semua informasi tentang tanaman anda</h1>
                        <p className="">Menambah wawasan anda tentang merawat tanaman anda hanya dalam satu genggaman</p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 service-box">
                        <Image src={img} alt="Diagnose Plant Disease"/>
                        <h3>Diagnosa penyakit</h3>
                        <p>Ketahui penyakit tanaman anda dengan sekali potret</p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 service-boxs">
                        <Image src={img1} alt="Plant Information"/>
                        <h3>Informasi tanaman</h3>
                        <p>Menambah wawasan anda tentang merawat tanaman hias</p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 service-box">
                        <Image src={img2} alt="Schedule Reminder"/>
                        <h3>Pengingat jadwal</h3>
                        <p>Atur jadwal untuk menyiram tanaman dengan rutin</p>
                    </div>
                </div>
            </div>
        </section>
        <Diagnosa />
    </div>
    )
}

export default informasi