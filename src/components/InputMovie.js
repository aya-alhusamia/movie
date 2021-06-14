import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../store/action";

const AddMovie = () => {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMovie(name));
    setName("");
  };
  return (
    <form onSubmit={handleSubmit} className="add-input">
      <input value={name} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddMovie;
