import { useNavigate } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    const nav = useNavigate();
    return (
        <section className='not-found-page'>
            <div className='not-found-card'>
                <p className='not-found-code'>404</p>
                <h1>Página não encontrada</h1>
                <p>Desculpe — a página que você procura não existe.</p>
                <div className='not-found-actions'>
                    <button className='not-found-button' onClick={() => nav(-1)}>
                        Voltar
                    </button>
                </div>
            </div>
        </section>
    );
}
