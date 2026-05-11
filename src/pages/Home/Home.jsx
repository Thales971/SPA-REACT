import TM from '../../assets/tm.png';
import Card from '../../components/Card/Card.jsx';
import './Home.css';

export default function Home() {
    const categories = [
        {
            title: 'Pokébolas',
            desc: 'Encontre uma variedade de pokébolas para capturar seu Pokémon favorito.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png',
        },
        {
            title: 'Berries',
            desc: 'Berries e suplementos para ajudar em batalhas e treinamento.',
            image: 'https://static.wikia.nocookie.net/pokemon/images/c/c3/RazzBerry-GO.png/revision/latest?cb=20170313125826',
        },
        {
            title: 'Figuras',
            desc: 'Colecionáveis, pelúcias e figuras de ação dos melhores Pokémons.',
            image: 'https://www.pngarts.com/files/3/Pokemon-PNG-Download-Image.png',
        },
        {
            title: 'TMs',
            desc: 'Máquinas Técnicas para ensinar movimentos especiais.',
            image: TM,
        },
        {
            title: 'Curas',
            desc: 'Recupera HP e remove status negativos dos seus Pokémons.',
            image: 'https://static.wikia.nocookie.net/pokemon/images/a/ae/Potion_IX_sprite.png/revision/latest/scale-to-width/360?cb=20230115145136',
        },
        {
            title: 'Cartas Premium',
            desc: 'Baralhos com cartas raras e holográficas de edições especiais.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseDH0flSf9zptZUdO6UIdG9tVWSSHUn9fqw&s',
        },
    ];

    return (
        <section className='home-page'>
            <div className='home-hero'>
                <p className='eyebrow'>Loja fictícia em React</p>
                <h1>PokéShop</h1>
                <p>Bem-vindo à PokéShop — sua loja fictícia de produtos Pokémon!</p>
            </div>

            <div className='home-cards'>
                {categories.map((cat) => (
                    <Card key={cat.title} title={cat.title} image={cat.image}>
                        {cat.desc}
                    </Card>
                ))}
            </div>
        </section>
    );
}
