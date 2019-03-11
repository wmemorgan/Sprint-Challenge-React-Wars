import React from 'react'

const Pagination = props => {
  console.log(`Pagination props: `, props)
  const { totalRecords, pageLimit,
    nextPage, getCharacters } = props
  const currentPage = number => nextPage ? nextPage.slice(0,-1) + number : '' 
  const previousPage = props.previousPage ? props.previousPage : 'https://swapi.co/api/people/?page=1'
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalRecords / pageLimit); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)

  return (
    <div className="pagination-container">
      <div 
        className="page-number"
        onClick={() => getCharacters('https://swapi.co/api/people/')}
      >
        First
      </div>
      <div 
        className="page-number"
        onClick={() => getCharacters(previousPage)}
      >
        Previous
      </div>
      {pageNumbers.map(number => (
        <div 
          className="page-number" 
          key={number} 
          onClick={() => getCharacters(currentPage(number))}
        >
          {number}
        </div>
      ))}
      <div 
        className="page-number"
        onClick={() => getCharacters(nextPage)}
      >
        Next
      </div>
      <div className="page-number">
        Last
      </div>      
    </div>
  )
}

export default Pagination
