import "./App.css";
import MovieList from "./components/MovieList";
import InputMovie from "./components/InputMovie";
function App() {
  return (
    <div className="App">
      <InputMovie />
      <MovieList />
    </div>
  );
}

export default App;
