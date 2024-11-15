export default function Feed(props) {
  return (
    <>
      <h3 className="feedTitle">{props.titleFeed}</h3>
      <div className="grid">{props.children}</div>
    </>
  );
}
