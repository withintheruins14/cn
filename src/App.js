import { useEffect, useState } from 'react';
import './App.scss';
import chuck from './chuck.jpg';

function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((f) => f.json())
      .then((f) => {
        const fact = f.value;
        setFact(fact);
      });
  }, []);

  return (
    <div className="App">
      <img src={chuck} alt="chuck norris" />
      <h1>chuck norris</h1>
      <span>random facts</span>
      <section>
        <div className="column">
          <h3>did you know?</h3>
          {fact && (<p>{fact}</p>)}
        </div>
        <div className="column">
          <h3>search for facts</h3>
          <form>
            <input />
            <button type="submit">
              search
            </button>
          </form>
        </div>
      </section>
      <footer>
        <span id="credit">
          built with https://api.chucknorris.io/
        </span>
      </footer>
    </div>
  );
}

export default App;
