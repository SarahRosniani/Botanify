import { Routes, Route} from 'react-router-dom'
import '../src/dist/css/main.css'
import './dist/css/style.css'
import './dist/css/d.css';
import './dist/css/dt.css';
import Navbar from './components/NavbarComp'
import Footer from './components/Footer'
import hero from './pages/Hero'
import diagnosa from './pages/Diagnosa'
import scan from './pages/Scan'
import edukasi from './pages/Edukasi'
import informasi from './pages/Informasi'
import pengingat from './pages/Pengingat'
import Testimoni from './pages/Testimoni'
import Blog_information from './pages/Blog_information'
import Blog_detail from './pages/Blog_detail'
import Upload from './upload/Upload';
import Loading from './upload/Loading';
import Result from './upload/Result';

function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" Component={hero}/>
      <Route path="/diagnosa" Component={diagnosa}/>
      <Route path="/scan" Component={scan}/>
      <Route path="/edukasi" Component={edukasi}/>
      <Route path="/informasi" Component={informasi}/>
      <Route path="/pengingat" Component={pengingat}/>
      <Route path="/testimoni" Component={Testimoni}/>
      <Route path="/blog" Component={Blog_information}/>
      <Route path="/detail" Component={Blog_detail}/>
      <Route path="/upload" Component={Upload} />
      <Route path="/loading" Component={Loading} />
      <Route path="/result" Component={Result} />

    </Routes>
    <Footer />
  </div>
}

export default App
