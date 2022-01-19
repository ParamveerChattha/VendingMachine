import "./App.css";
import { Title } from "./components/Title";
import { Machine } from "./components/Machine";

function App() {
  return (
    <div className="wrapper">
      <div className="nav">
        <Title />
      </div>
      <div className="content-container">
        <Machine />
      </div>
    </div>
  );
}

export default App;
