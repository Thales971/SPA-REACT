import { Link } from 'react-router-dom';
import './components.css';

export default function Header() {
    return (
        <header className='site-header'>
            <div className='wrap'>
                <h1 className='brand'>PokéShop</h1>
                <nav>
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
