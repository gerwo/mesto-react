function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="card">
      <img className="card__image" alt={`Изображение ${props.name}`} src={props.link} onClick={handleClick}/>
      <div className="card__content">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-block">
          <button className="button button_type_like opacity" aria-label="Нравиться" type="button"></button>
          <p className="card__like-count">{props.likes.length}</p>
        </div>
      </div>
      <button className="button button_type_delete-card opacity"></button>
    </li>
  );
}

export default Card;