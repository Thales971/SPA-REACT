import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Products from './pages/Product/Products.jsx';
import Team from './pages/Team/Team.jsx';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
