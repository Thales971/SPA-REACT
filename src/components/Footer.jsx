import './components.css';

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='wrap'>
                <p>© {new Date().getFullYear()} PokéShop — Loja fictícia de produtos Pokémon</p>
            </div>
        </footer>
    );
}
