import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../dist/css/style.css';
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
  const [selectedFile, setSelectedFile] = useState(null);
  const formRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile && formRef.current) {
      formRef.current.requestSubmit();
    }
  }, [selectedFile]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/tanaman/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response Data:', response.data);

      // Navigate to loading screen and pass data
      navigate('/loading', { state: { data: response.data.data } });
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.message);
    }
  };

  return (
    <div>
      <header className="upload">
        <div className="judul">
          <h1 className="underline-text">
            Diagnosa penyakit <br /> pada tanaman anda
            <div className="underline-container move-right">
              <img src={Underline1} alt="underline" className="underline-img" />
            </div>
            <div className="underline-container2 move-right2">
              <img src={Underline2} alt="underline" className="underline-img2" />
            </div>
          </h1>
          <p>
            Unggah foto tanaman anda kedalam kotak dan dapatkan <br /> informasi penyakit tentang tanaman tersebut
          </p>
        </div>

        <div className="upload-card">
          <div className="card text-center">
            <div className="card-body">
              <form ref={formRef} onSubmit={handleSubmit}>
                <label className="custom-file-upload btn-success">
                  Unggah Foto
                  <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                </label>
              </form>
              <p className="card-text">Unggah foto tanaman anda disini</p>
            </div>
            <div className="divider"></div>
            <div className="sample-photos">
              <div className="sample-text">Atau coba dengan beberapa foto ini:</div>
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
        <h1>
          Bagaimana cara kerja <br /> AI pada <span className="highlight">Botanify</span>
        </h1>
        <p>
          Pelajari bagaimana cara kerja Botanify untuk <br /> mendianogsa penyakit pada tanaman anda
        </p>
      </div>

      {/* STEP 1 */}
      <div className="custom-title-container">
        <div className="step-text">STEP 1</div>
        <div className="custom-titlex">
          <div className="title-container">
            <h1>
              Unggah foto tanaman <br /> anda kedalam website
            </h1>
            <p>
              Unggah foto tanaman anda kedalam kotak yang telah tersedia dan <br /> biarkan AI kami bekerja untuk anda
            </p>
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
            <h1>
              Bersantai! Biarkan sistem <br /> kami bekerja untuk anda
            </h1>
            <p>
              AI kami akan bekerja secara cepat dan efisien untuk mendianogsa <br /> penyakit yang ada pada tanaman anda
            </p>
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="custom-title-container">
        <div className="step-text">STEP 3</div>
        <div className="custom-titlex3">
          <div className="title-container">
            <h1>
              Voila! Hasil dari tanaman <br /> anda akan muncul dan <br /> siap untuk anda baca
            </h1>
            <p>
              Anda akan mendapatkan detail dari penyakit tanaman anda dengan <br /> jelas, beserta dengna cara penanganannya
            </p>
          </div>
          <img src={img7} alt="hasil" />
        </div>
      </div>
    </div>
  );
};

export default Upload;