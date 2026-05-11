import Card from '../../components/Card/Card.jsx';
import './Home.css';

export default function Home() {
    return (
        <section className='home-page'>
            <div className='home-hero'>
                <p className='eyebrow'>Loja fictícia em React</p>
                <h1>PokéShop</h1>
                <p>Bem-vindo à PokéShop — sua loja fictícia de produtos Pokémon!</p>
            </div>

            <div className='home-cards'>
                <Card title='Pokébolas'>
                    Encontre uma variedade de pokébolas para capturar seu Pokémon favorito.
                </Card>
                <Card title='Berries'>
                    Berries e suplementos para ajudar em batalhas e treinamento.
                </Card>
                <Card title='Figuras'>
                    Colecionáveis, pelúcias e figuras de ação dos melhores Pokémons.
                </Card>
            </div>
        </section>
    );
}
