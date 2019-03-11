import React from 'react'
import classNames from 'classnames'

const Pagination = props => {
  const { totalRecords, pageLimit, partialURL, currentPage,
    nextPage, getCharacters } = props
  const goToPage = number => partialURL + number 
  const previousPage = props.previousPage ? props.previousPage : 'https://swapi.co/api/people/?page=1'
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRecords / pageLimit); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <div 
        className="page-number"
        onClick={() => getCharacters(goToPage(1), 1)}
      >
        First
      </div>
      <div 
        className="page-number"
        onClick={() => getCharacters(previousPage, currentPage - 1)}
      >
        Previous
      </div>
      {pageNumbers.map(number => {
        console.log(`number is: ${number}`)
        let pageNumberClassGroup = classNames({
          "page-number": true,
          active: currentPage === number
        });
      return (
        <div 
          className={pageNumberClassGroup} 
          key={number} 
          onClick={() => getCharacters(goToPage(number), number)}
        >
          {number}
        </div>
      )})}
      <div 
        className="page-number"
        onClick={() => getCharacters(nextPage)}
      >
        Next
      </div>
      <div
        className="page-number"
        onClick={() => getCharacters(goToPage(pageNumbers.length), pageNumbers.length)}
      >
        Last
      </div>      
    </div>
  )
}

export default Pagination
