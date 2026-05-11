import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className='site-header'>
            <div className='header-inner'>
                <Link to='/' className='brand'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_PGqMeIrhVUaDZZ82pnllAQYicSwuh14LQ&s'
                        alt='PokéShop Logo'
                        className='logo-img'
                    />
                    PokéShop
                </Link>
                <nav className='site-nav' aria-label='Navegação principal'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>Sobre</Link>
                    <Link to='/products'>Produtos</Link>
                    <Link to='/contact'>Contato</Link>
                    <Link to='/team'>Equipe</Link>
                </nav>
            </div>
        </header>
    );
}
