import Card from '../components/Card';

export default function Home() {
    return (
        <section>
            <h1>PokéShop</h1>
            <p>Bem-vindo à PokéShop — sua loja fictícia de produtos Pokémon!</p>

            <div className='cards-grid'>
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
