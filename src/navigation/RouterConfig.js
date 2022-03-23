import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { ACHIEVEMENTS, ROOT, SETTINGS } from './CONSTANTS';

function RouterConfig() {
  return (
    <Routes>
      <Route exact path={ROOT} element={Home()} />
      <Route exact path={ACHIEVEMENTS} />
      <Route exact path={SETTINGS} />
    </Routes>
  );
}

export default RouterConfig;
