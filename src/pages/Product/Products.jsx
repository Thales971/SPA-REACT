import Card from '../../components/Card/Card.jsx';
import './Products.css';
import Articuno from '../../assets/articuno.png';
import Snorlax from '../../assets/snorlax.png';
import Mew from '../../assets/mew.png';
import Lapras from '../../assets/lapras.webp';
import Dragonite from '../../assets/dragonite.png';

const items = [
    {
        title: 'Pikachu Plush',
        desc: 'Pelúcia macia do Pikachu, ideal para colecionar.',
        image: 'https://www.nicepng.com/png/full/194-1940295_pokmon-large-pikachu-with-ashs-hat-plush-pikachu.png',
    },
    {
        title: 'Charizard Plush',
        desc: 'Pelúcia do Charizard.',
        image: 'https://www.nicepng.com/png/full/37-372759_charizard-plush.png',
    },
    {
        title: 'Blastoise Plush',
        desc: 'Pelúcia do Blastoise.',
        image: 'https://cdn.awsli.com.br/2657/2657807/produto/255240215/1708018899719-removebg-preview-bc9kk9gaxs.png',
    },
    {
        title: 'Venusaur Plush',
        desc: 'Pelúcia premium do Venusaur com detalhes costurados.',
        image: 'https://cdn.awsli.com.br/800x800/2657/2657807/produto/255021693/1707934056094-removebg-preview-nctll9jg5h.png',
    },
    {
        title: 'Dragonite Plush',
        desc: 'Plush fofo do Dragonite.',
        image: Dragonite,
    },
    {
        title: 'Mew Plush',
        desc: 'Pelúcia do Mew.',
        image: Mew,
    },
    {
        title: 'Mewtwo Plush',
        desc: 'Pelúcia do lendário Mewtwo.',
        image: 'https://preview.redd.it/i-made-the-mewtwo-plush-into-a-transparent-png-v0-ye1a72w1kkn41.png?auto=webp&s=367433e008607f0a32c5a8c6199c44723d95d422',
    },
    {
        title: 'Master Ball',
        desc: 'Pokébola premium com design exclusivo.',
        image: 'https://www.clipartmax.com/png/full/249-2496077_pokeball-png-download-pokemon-master-ball-png.png',
    },
    {
        title: 'Snorlax Plush',
        desc: 'Pelúcia gigante e confortável do Snorlax.',
        image: Snorlax,
    },
    {
        title: 'Gengar Plush',
        desc: 'Pelúcia colecionável do Gengar com efeitos luminosos.',
        image: 'https://www.pngkey.com/png/full/158-1582450_gengar-10-plush-gengar-plush.png',
    },
    {
        title: 'Lapras Plush',
        desc: 'Pelúcia do Lapras em escala real.',
        image: Lapras,
    },
    {
        title: 'Articuno Plush',
        desc: 'Pelúcia do lendário Articuno.',
        image: Articuno,
    },
];

export default function Products() {
    return (
        <section className='products-page'>
            <div className='products-hero'>
                <p className='eyebrow'>Catálogo oficial</p>
                <h1>Produtos</h1>
                <p>Veja alguns dos produtos disponíveis na loja.</p>
            </div>

            <div className='products-grid'>
                {items.map((it) => (
                    <Card key={it.title} title={it.title} image={it.image}>
                        {it.desc}
                    </Card>
                ))}
            </div>
        </section>
    );
}
