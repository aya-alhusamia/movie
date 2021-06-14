import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/action";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(deleteMovie(props.id))}>Delete</button>
  );
};
export default DeleteButton;
