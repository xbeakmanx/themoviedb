import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/view-details/:id`} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
