import { useState } from 'react';

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
        <section>
            <h1>Contato</h1>
            <p>Fale conosco pelo formulário abaixo ou via email: contato@pokeshop.test</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: 680, margin: '18px auto' }}>
                <div style={{ display: 'grid', gap: 8 }}>
                    <input
                        name='name'
                        placeholder='Nome'
                        value={form.name}
                        onChange={handleChange}
                    />
                    <input
                        name='email'
                        placeholder='Email'
                        value={form.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name='message'
                        placeholder='Mensagem'
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                    />
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    );
}
