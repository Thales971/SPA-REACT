import Card from '../components/Card';

const items = [
    { title: 'Pikachu Plush', desc: 'Pelúcia macia do Pikachu, ideal para colecionar.' },
    { title: 'Master Ball', desc: 'Pokébola lendária — aparência premium.' },
    { title: 'Potion Pack', desc: 'Pacote com potions para recuperar pontos.' },
    { title: 'Deck de Cartas', desc: 'Baralhos colecionáveis com artes exclusivas.' },
];

export default function Products() {
    return (
        <section>
            <h1>Produtos</h1>
            <p>Veja alguns dos produtos disponíveis na loja.</p>

            <div className='cards-grid'>
                {items.map((it) => (
                    <Card key={it.title} title={it.title}>
                        {it.desc}
                    </Card>
                ))}
            </div>
        </section>
    );
}
