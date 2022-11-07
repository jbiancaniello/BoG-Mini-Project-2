import Fact from './components/Fact';
import Button from './components/Button';
import * as ReactDOM from 'react-dom';
import './App.css';
import { useEffect, useState } from 'react';

function getFact(callback) {
  return fetch("https://catfact.ninja/fact").then().then(callback);
}

const App = () => {
  const [facts, setFacts] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 10, maxPages = Math.floor((facts.length - 1)/ pageSize);

  const getFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFacts([data.fact, ...facts]);
  }

  return (
    <div className="App">
      <header>
        <h1>Bits of Good Mini Project 2</h1>
        <h2>Cat Facts</h2>
      </header>
      <div className='currFact'>
        <Fact curr={true} fact={facts[0]}/>
      </div>
      <div class = 'buttons'>
        <Button 
          text={'Previous'} 
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        />
        <Button
          text={'Get New Fact'}
          onClick={() => getFact()}
        />
        <Button 
            text={'Next'} 
            disabled={page >= maxPages}
            onClick={() => setPage(page + 1)}
        />
      </div>
      <div class = 'facts'>
        {facts.slice(1 + page * pageSize, (page + 1) * pageSize)
          .map(fact => <Fact fact={fact}/>)}
      </div>
    </div>
  );
}

export default App;
