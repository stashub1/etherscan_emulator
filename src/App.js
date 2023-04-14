import logo from "./logo.svg";
import "./App.css";
import BlocksTable from "./components/BlocksTable";
import BlockTransactions from "./components/BlockTranaactions";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Routes>
            <Route path="/" element={<BlocksTable />} />
            <Route path="/block/:blockNumber" element={<BlockTransactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
