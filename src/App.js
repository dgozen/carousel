import "./App.css";
 import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <h1>Monochrome</h1>
      <Carousel chunkSize={3} />
    </div>
  );
}

export default App;
