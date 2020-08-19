import React, { useState, useCallback, useEffect } from 'react';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const onSearchChange = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  let fetchData = (searchWord) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=`)
     .then(res => res.json())
     .then(res => setResult(res))
     .catch(err => console.error(err))
  }


  let handleSubmit = (e) => {
    e.preventDefault()

    fetchData(search)
    setSearch('')
  }

console.log(result)
  return (
    <div className="App">
      <h2 className="title"> <strong>Newsorama</strong></h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br/>
          <input type="text" value={search} onChange={onSearchChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>


  );
}

export default App;
