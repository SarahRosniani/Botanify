import { Image } from "react-bootstrap"
import img from '../assets/xiao.png'
import img2 from '../assets/jason.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Scan from '../pages/Scan'

import React from 'react'

const Testimoni = () => {
    return (
    <div>
        <section id="komentar" className="komentar section">
            <div className="content">
            <div className="title">Apa yang dikatakan oleh pengguna kami</div>
            <div className="subtitle">Unggah foto tanaman anda kedalam kotak dan dapatkan informasi penyakit tentang tanaman tersebut</div>
            </div>
            <div className="testimonials">
            <div className="shadow"></div>
            <div className="testimonials">
                <div className="testimonial">
                <div className="quote">“</div>
                <p>"Wow, canggih bet!! Saya tidak menyangka akan ada aplikasi secanggih ini, dengan aplikasi ini saya tidak perlu takut lagi tentang kesehatan tanaman."</p>
                <div className="author">
                    <Image src={img} alt="Xiao Mei" />
                    <div className="name">Xiao Mei</div>
                </div>
                </div>
                <div className="testimonial">
                <div className="quote">“</div>
                <p>"Supa App! Damn bro, this app is so superb. Saya sekarang merasa seperti dokter tanaman, tidak ada teman yang bertanya saya tinggal jawab."</p>
                <div className="author">
                    <Image src={img2} alt="Jason Wongso" />
                    <div className="name">Jason Wongso</div>
                </div>
                </div>
            </div>
            </div>
            <div className="button-container">
            <div className="btn-coba">
                <i className="bi bi-arrow-right-short" style={{ height: '100px', width: '100px' }}></i>
            </div>
            </div>
        </section>
        <Scan />
    </div>
  )
}

export default Testimoni