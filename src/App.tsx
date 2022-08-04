import logo from './assets/logo.svg';
import Home from './pages';

function App() {
  return (
    <>
      <header className="flex justify-between items-center">
        <img
          className="logo"
          src={logo}
          alt="Restry Logo featuring a pink lotus and whit highlights"
        />
      </header>
      <Home />
    </>
  );
}

export default App;
