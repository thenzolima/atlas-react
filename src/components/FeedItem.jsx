import { Link } from 'react-router-dom'

export default function FeedItem(props) {
    return (
        <Link to={`/content/${props.url}`}>
            <article className="card">
                <img src={props.imageUrl} alt={props.alt} />
                <div className="options">
                    <p>{props.cardTitle}</p>
                </div>
            </article>
        </Link>
    )
}