import { useEffect, useState, useRef } from 'react';
import './App.scss';
import chuck from './chuck.jpg';

function App() {
  const [fact, setFact] = useState();
  const [error, setError] = useState(false);
  const inputRef = useRef();
  const input = inputRef?.current;

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((f) => f.json())
      .then((f) => {
        const fact = f.value;
        setFact(fact);
      });
  }, []);

  const onChange = () => {
    if (input) {
      const isValid = input.checkValidity();
      if (!isValid) input.reportValidity()
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const query = input.value;
      fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then((f) => f.json())
        .then((f) => {
          const fact = f.result?.[0]?.value;
          if (fact) {
            setError(false);
            setFact(fact)
          } else {
            setError(true);
          }
        })
        .catch(() => setError(true))
    }
  }

  return (
    <div className="App">
      <img src={chuck} alt="chuck norris" role="figure" />
      <h1>chuck norris</h1>
      <span>random facts</span>
      <section>
        <div className="column">
          <h3>did you know?</h3>
          {fact && (<p>{fact}</p>)}
        </div>
        <div className="column">
          <h3>search for facts</h3>
          <form onSubmit={onSubmit}>
            <input ref={inputRef} onChange={onChange} pattern="[A-Za-z]{0,10}" title="10 characters max"/>
            <input type="submit" value="search" />
            {error && (<span className="error">no result</span>)}
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
