import React, { useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('')

  // useEffect(() =>
  // fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=9152561a7d9f477eabb7741f4a904434")
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // );

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=`)
    //   .then(res => res.json())
    //   .then(res => console.log(res))
  }

  return (
    <div className="App">
    <h2 className="title"> <strong>Newsorama</strong></h2>
    <form onSubmit={handleSubmit}>
      <label>
        Name: <br/>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default App;
