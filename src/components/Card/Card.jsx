import './Card.css';

export default function Card({ title, children, image }) {
    return (
        <article className='card'>
            {image && <img src={image} alt={title} className='card-image' />}
            <div className='card-content'>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </article>
    );
}
