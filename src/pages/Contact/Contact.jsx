import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // não envia — apenas demonstrativo
        alert('Mensagem simulada: obrigado, ' + (form.name || 'visitante'));
    }

    return (
        <section className='contact-page'>
            <div className='contact-hero'>
                <p className='eyebrow'>Fale com a gente</p>
                <h1>Contato</h1>
                <p>Fale conosco pelo formulário abaixo ou via email: contato@pokeshop.test</p>
            </div>

            <div className='contact-layout'>
                <aside className='contact-info-card'>
                    <h2>Informações</h2>
                    <ul className='contact-info-list'>
                        <li>
                            <strong>Email</strong>
                            <span>contato@pokeshop.test</span>
                        </li>
                        <li>
                            <strong>Telefone</strong>
                            <span>(11) 9999-0000</span>
                        </li>
                        <li>
                            <strong>Atendimento</strong>
                            <span>Segunda a sexta, 9h às 18h</span>
                        </li>
                    </ul>
                </aside>

                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='contact-fields'>
                        <label className='field' htmlFor='name'>
                            Nome
                            <input
                                id='name'
                                name='name'
                                placeholder='Seu nome'
                                value={form.name}
                                onChange={handleChange}
                            />
                        </label>

                        <label className='field' htmlFor='email'>
                            Email
                            <input
                                id='email'
                                name='email'
                                placeholder='Seu email'
                                value={form.email}
                                onChange={handleChange}
                            />
                        </label>

                        <label className='field' htmlFor='message'>
                            Mensagem
                            <textarea
                                id='message'
                                name='message'
                                placeholder='Escreva sua mensagem'
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                            />
                        </label>
                    </div>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    );
}
