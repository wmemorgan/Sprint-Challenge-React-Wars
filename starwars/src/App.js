import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList'
import Pagination from './components/Pagination'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  // Download API data into state
  getCharacters = (URL, currentPage=1) => {
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          totalRecords: data.count,
          pageLimit: 10,
          currentPage,
          nextPage: data.next ? data.next : '',
          previousPage: data.previous ? data.previous : ''
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars, totalRecords, pageLimit, currentPage, nextPage, previousPage } = this.state
    // Obtain base API call without the page number
    const partialURL = nextPage ? nextPage.slice(0, -1) : 'https://swapi.co/api/people/?page='
    
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={starwarsChars}/>
        <Pagination
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          partialURL={partialURL}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage} 
          getCharacters={this.getCharacters}
        />
      </div>
    );
  }
}

export default App;
