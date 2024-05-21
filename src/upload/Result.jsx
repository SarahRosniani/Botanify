import { useState } from 'react';
import '../dist/css/style.css'
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import img5 from '../assets/unggah.png';
import img6 from '../assets/loading.png';
import img7 from '../assets/hasil.png';
import plantImage from '../assets/flower.png';
import Underline1 from '../assets/Vector 1.png';
import Underline2 from '../assets/Vector 2.png';

const Result = () => {
  const [showCard, setShowCard] = useState(true);

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <div>
      <header className="upload">
      <div className="judul">
          <h1 className="underline-text">Diagnosa penyakit <br/> pada tanaman anda
          <div className="underline-container move-right">
              <img src={Underline1} alt="underline" className="underline-img" />
            </div>
            <div className="underline-container2 move-right2">
            <img src={Underline2} alt="underline" className="underline-img2" />
            </div>
          </h1>
          <p>Unggah foto tanaman anda kedalam kotak dan dapatkan <br/> informasi penyakit tentang tanaman tersebut</p>
        </div>

        {showCard && (
          <div className="result-card">
            <div className="card-result">
              <div className="card-header-result d-flex justify-content-between align-items-center">
                <h5 className="text-success">Hasil Scan</h5>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} className="close-icon" />
              </div>
              <div className="card-body-result d-flex">
                <img
                  src={plantImage}
                  alt="Aglonema"
                  className="plant-image img-fluid mr-3"
                />
                <div className="d-flex flex-column justify-content-between w-100">
                  <div>
                    <h5 className="card-title-result">Aglaonema</h5>
                    <h6 className="text-muted">Chinese Evergreen</h6>
                  </div>
                  <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="accordion-header">Keterangan</Accordion.Header>
                      <Accordion.Body>
                        Aglaonema, juga dikenal sebagai -Chinese Evergreen-, adalah tanaman hias dengan daun tebal, hijau gelap, dan motif daun yang menarik. Beberapa varietas memiliki warna daun yang beragam, termasuk hijau, merah muda, putih, atau perak.
                        <div className="custom-divider"></div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="accordion-header">Hasil dianogsa</Accordion.Header>
                      <Accordion.Body>
                        Informasi hasil diagnosa akan muncul di sini. Ini dapat mencakup gejala penyakit, penyebab, dan tingkat keparahan.
                        <div className="custom-divider"></div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header className="accordion-header">Penanganan</Accordion.Header>
                      <Accordion.Body>
                        Langkah-langkah penanganan yang disarankan akan dijelaskan di sini, termasuk perawatan dan tindakan pencegahan.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="custom-title1">
        <h1>Bagaimana cara kerja <br /> AI pada <span className="highlight">Botanify</span></h1>
        <p>Pelajari bagaimana cara kerja Botanify untuk <br /> mendianogsa penyakit pada tanaman anda</p>
      </div>

      {/* STEP 1 */}
      <div className="custom-title-container">
        <div className="step-text">STEP 1</div>
        <div className="custom-titlex">
          <div className="title-container">
            <h1>Unggah foto tanaman <br /> anda kedalam website</h1>
            <p>Unggah foto tanaman anda kedalam kotak yang telah tersedia dan <br /> biarkan AI kami bekerja untuk anda</p>
          </div>
          <img src={img5} alt="Foto Tanaman" />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="custom-title-container2">
        <div className="content-container2">
          <img src={img6} alt="Foto Tanaman" />
        </div>
        <div className="custom-titlex2">
          <div className="title-container2">
            <div className="step-text2">STEP 2</div>
            <h1>Bersantai! Biarkan sistem <br /> kami bekerja untuk anda</h1>
            <p>AI kami akan bekerja secara cepat dan efisien untuk mendianogsa <br /> penyakit yang ada pada tanaman anda</p>
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="custom-title-container">
        <div className="step-text">STEP 3</div>
        <div className="custom-titlex3">
          <div className="title-container">
            <h1>Voila! Hasil dari tanaman <br /> anda akan muncul dan <br/> siap untuk anda baca</h1>
            <p>Anda akan mendapatkan detail dari penyakit tanaman anda dengan <br /> jelas, beserta dengna cara penanganannya</p>
          </div>
          <img src={img7} alt="hasil" />
        </div>
      </div>
    </div>
  );
}

export default Result;