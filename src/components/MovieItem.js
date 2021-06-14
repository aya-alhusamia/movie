import DeleteButton from "./Button";
import UpdateMovie from "./UpdateMovie";

const MovieItem = (props) => {
  return (
    <div>
      <p>{props.movie.name}</p>
      <div>
        <UpdateMovie movie={props.movie} text={props.text} />
        <DeleteButton id={props.movie.id} />
      </div>
    </div>
  );
};
export default MovieItem;
