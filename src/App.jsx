import { Routes, Route} from 'react-router-dom'
import '../src/dist/css/main.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import hero from './pages/Hero'
import diagnosa from './pages/Diagnosa'
import scan from './pages/Scan'
import edukasi from './pages/Edukasi'
import informasi from './pages/Informasi'
import pengingat from './pages/Pengingat'
import Testimoni from './pages/Testimoni'

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

    </Routes>
    <Footer />
  </div>
}

export default App
