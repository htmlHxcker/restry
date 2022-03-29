import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { ACHIEVEMENTS, ROOT, SETTINGS } from './CONSTANTS';

function RouterConfig() {
  return (
    <Routes>
      <Route path={ROOT} element={Home()} />
      <Route path={ACHIEVEMENTS} />
      <Route path={SETTINGS} />
    </Routes>
  );
}

export default RouterConfig;
