import { Routes, Route } from 'react-router-dom';
import { MainPage, CongestionPage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='' element={<CongestionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
