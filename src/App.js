import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Protected from "./Protected";
import Login from "./Login";
import Gallery from "./Gallery";
import Right from "./Right";
import Home1 from "./Home1";
import Graph from "./Graph";
import Document from "./Document";
import Security from "./Security";
import Upload from './Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected cmp={Home} />}>
            <Route path='gallery' element={<Gallery />} />
            <Route path='right' element={<Right />} />
            <Route path='home1' element={<Home1 />} />
            <Route path='graph' element={<Graph />} />
            <Route path='document/:id' element={<Document />} />
            <Route path='security' element={<Security />} />
            <Route path='upload' element={<Upload />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
