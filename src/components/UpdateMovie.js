import { useDispatch } from "react-redux";
import { updateMovie } from "../store/action";
const UpdateMovie = (props) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(updateMovie(props.movie))}>
      {props.text}
    </button>
  );
};
export default UpdateMovie;
