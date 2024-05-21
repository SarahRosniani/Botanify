import { useNavigate } from 'react-router-dom';
import '../dist/css/style.css'
import img from '../assets/unggah/bunga.png';
import img2 from '../assets/unggah/bungaa.png';
import img3 from '../assets/unggah/bungaaa.png';
import img4 from '../assets/unggah/bungaaaa.png';
import img5 from '../assets/unggah.png';
import img6 from '../assets/loading.png';
import img7 from '../assets/hasil.png';
import Underline1 from '../assets/Vector 1.png';
import Underline2 from '../assets/Vector 2.png';

const Upload = () => {
  const navigate = useNavigate();

  const handleFileUpload = () => {
    setTimeout(() => {
      navigate('/loading');
    }, 1000);
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

        <div className="upload-card">
          <div className="card text-center">
            <div className="card-body">
              <label className="custom-file-upload btn-success">
                Unggah Foto
                <input type="file" id="file-upload" onChange={handleFileUpload} />
              </label>
              <p className="card-text">Unggah foto tanaman anda disini</p>
            </div>
            <div className="divider"></div>
            <div className="sample-photos">
              <div className="sample-text">Atau coba dengan <br />beberapa foto ini:</div>
              <div className="photo-thumbnails">
                <img className="photo-thumbnail" src={img} alt="sample1" />
                <img className="photo-thumbnail" src={img2} alt="sample2" />
                <img className="photo-thumbnail" src={img3} alt="sample3" />
                <img className="photo-thumbnail" src={img4} alt="sample4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="custom-title">
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

export default Upload;