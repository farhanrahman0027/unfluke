import {Routes,Route} from 'react-router-dom'
import Header from './components/header/header';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Font Awesome
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
//CSS
import "./assets/css/style.css";
import Footer from './components/footer/footer';
import Home from './components/home/home';
import AboutUs from './components/about-us/aboutUs';
import Career from './components/careers/careers';
import Contact from './components/contact/contact';
function App() {

  return (
    <div className='row m-0 p-0'>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
