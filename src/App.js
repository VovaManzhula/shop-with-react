import "./App.css";
import AddModal from "./components/AddModal";

import MainComponent from "./components/MainCompon";
function App() {
  return (
    <div className="Container">
      <h1 className="text-center">My-shop</h1>
      <AddModal />
      <div className="shop-bg container">
        <MainComponent className="container" />
      </div>
    </div>
  );
}

export default App;
