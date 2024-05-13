export default function Feed(props) {
    return (
        <>
            <h3>{props.titleFeed}</h3>
            <div className="grid">
                {props.children}
            </div>
        </>
    )
}   