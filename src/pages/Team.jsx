export default function Team() {
    return (
        <section>
            <h1>Equipe</h1>
            <p>Conheça a equipe fictícia por trás da PokéShop.</p>

            <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
                <div style={{ padding: 12, border: '1px solid var(--border)', borderRadius: 8 }}>
                    <h3>Ash Ketchum</h3>
                    <p>Treinador e consultor de aventuras.</p>
                </div>
                <div style={{ padding: 12, border: '1px solid var(--border)', borderRadius: 8 }}>
                    <h3>Misty</h3>
                    <p>Especialista em produtos aquáticos e curadoria.</p>
                </div>
            </div>
        </section>
    );
}
