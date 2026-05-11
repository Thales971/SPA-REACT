import './About.css';

export default function About() {
    return (
        <section className='about-page'>
            <div className='about-hero'>
                <p className='eyebrow'>Quem somos</p>
                <h1>Sobre</h1>
                <p>PokéShop é uma loja fictícia dedicada aos fãs de Pokémon.</p>
            </div>

            <div className='about-grid'>
                <article className='about-card'>
                    <h2>Missão</h2>
                    <p>Oferecer produtos que conectem fãs ao universo Pokémon.</p>
                </article>

                <article className='about-card'>
                    <h2>Visão</h2>
                    <p>Ser referência em experiências temáticas e colecionáveis.</p>
                </article>

                <article className='about-card'>
                    <h2>Valores</h2>
                    <ul className='about-list'>
                        <li>Paixão por Pokémon</li>
                        <li>Qualidade e criatividade</li>
                        <li>Comunidade</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}
