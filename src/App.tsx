import { Routes, Route, useLocation, Navigate   } from 'react-router-dom';
import './App.css'
import {
  Header,
  Footer,
} from './components'
import {
  Home,
  Introduce,
  Worship,
  NotPage
} from './routers'

function App() {
  const location = useLocation();
  const hiddenPaths = ['/', '/404'];
  const isHiddenPath = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!isHiddenPath && <Header />}
      <Routes>
        <Route path="/" element={<div>intro</div>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/404" element={<NotPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      {!isHiddenPath && <Footer />}
    </>
  );
}

export default App
