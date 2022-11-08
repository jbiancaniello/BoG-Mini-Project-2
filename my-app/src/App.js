import Fact from './components/Fact';
import Button from './components/Button';
import './App.css';
import { useEffect, useState } from 'react';

const getFact = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  return data.fact;
}

const App = () => {
  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 10, maxPages = Math.floor((facts.length - 1)/ pageSize);

  const handleFavorite = () => {
    console.log(Fact.favorite);
  };

  useEffect(() => { 
    async function setInitialFact() {
      setFacts([await getFact()]);
    }

    setInitialFact();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Bits of Good Mini Project 2</h1>
        <h2>Cat Facts</h2>
      </header>
      <div className='currFact'>
        <Fact curr={true} fact={facts[0]}/>
      </div>
      <div className='buttons'>
        <Button 
          text={'Previous'} 
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        />
        <Button
          text={'Get New Fact'}
          onClick={async () => setFacts([await getFact(), ...facts])}
        />
        <Button 
            text={'Next'} 
            disabled={page >= maxPages}
            onClick={() => setPage(page + 1)}
        />
      </div>
      <div className='facts'>
        {facts.slice(1 + page * pageSize, (page + 1) * pageSize)
          .map(fact => <Fact fact={fact} key={fact}/>)}
      </div>
    </div>
  );
}

export default App;
