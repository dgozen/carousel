import "./App.css";
 import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <h1>Monochrome </h1>
      <Carousel totalImages={3} />
    </div>
  );
}

export default App;
