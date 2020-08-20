import React, { useState } from 'react';
import Articles from './components/Articles'
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  const fetchData = (searchWord) => {
    fetch(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=`)
     .then(res => res.json())
     .then(res => setResult(res))
     .catch(err => console.error(err));
  };


  let handleSubmit = (e) => {
    e.preventDefault();

    fetchData(search);
    setSearch('');
  };

  let removeArticle = (selectedArticle) => {
    console.log("selectedArticle", selectedArticle)
    console.log(result)

    let art = result.articles.filter(article => article.title !== selectedArticle.title)

    setResult(art)
  }


// console.log(result)
  return (
    <div className="App">
      <h2 className="title"> <strong>Newsorama</strong></h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search News Article:
          <input type="text" value={search} onChange={event => setSearch(event.target.value)}/>
        </label>
        <button type="submit" value="Submit" />
      </form>
      <Articles result={result} removeArticle={removeArticle}/>
    </div>
  );
}

export default App;
