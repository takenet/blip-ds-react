import "./App.css";
import "./pages/componentList.scss";
import ComponentRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <ComponentRoutes />
      </Router>
    </div>
  );
}

export default App;
