import './Footer.css';

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='footer-inner'>
                <p>© {new Date().getFullYear()} PokéShop — Loja fictícia de produtos Pokémon</p>
            </div>
        </footer>
    );
}
