import Watched from "./Watched";
const MovieList = () => {
  return (
    <div>
      <div>
        <div className="list-1">
          <Watched watched={false} />
        </div>
      </div>

      <div className="list-2">
        <Watched watched />
      </div>
    </div>
  );
};
export default MovieList;
