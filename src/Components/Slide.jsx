function Slide(props) {
  return (
    <div className="slide-container" data-cy="slide">
      <h3 data-cy="title">{props.item.title}</h3>
      <p data-cy="description">{props.item.description}</p>
    </div>
  );
}

export default Slide;
