import { Routes, Route } from 'react-router-dom';
import { MainPage, CongestionPage, NotFoundPage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='' element={<CongestionPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
