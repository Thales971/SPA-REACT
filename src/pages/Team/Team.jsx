import './Team.css';

const members = [
    {
        name: 'Ash Ketchum',
        role: 'Treinador e consultor de aventuras',
        desc: 'Ajuda na curadoria de itens para fãs que adoram explorar.',
    },
    {
        name: 'Misty',
        role: 'Especialista em produtos aquáticos',
        desc: 'Seleciona acessórios temáticos com foco em colecionáveis raros.',
    },
];

export default function Team() {
    return (
        <section className='team-page'>
            <div className='team-hero'>
                <p className='eyebrow'>Pessoas por trás da marca</p>
                <h1>Equipe</h1>
                <p>Conheça a equipe fictícia por trás da PokéShop.</p>
            </div>

            <div className='team-grid'>
                {members.map((member) => (
                    <article key={member.name} className='team-card'>
                        <p className='team-role'>{member.role}</p>
                        <h2>{member.name}</h2>
                        <p>{member.desc}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
