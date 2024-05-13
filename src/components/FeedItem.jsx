export default function FeedItem(props) {
    return (
        <article className="card">
            <img src={props.imageUrl} alt={props.alt} />
            <div className="options">
                <p>{props.cardTitle}</p>
                <p>dsada</p>
            </div>
        </article>
    )
}