import React from 'react'
import classNames from 'classnames'

const Pagination = props => {
  const { totalRecords, pageLimit, partialURL, currentPage, getCharacters } = props
  const goToPage = number => partialURL + number 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRecords / pageLimit); i++) {
    pageNumbers.push(i);
  }

  const incrementPage = currentPage + 1 >= pageNumbers.length ? pageNumbers.length : currentPage + 1
  const decrementPage = currentPage - 1 <= 1 ? 1 : currentPage - 1

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
        onClick={() => getCharacters(goToPage(decrementPage), decrementPage)}
      >
        Previous
      </div>

      {pageNumbers.map(number => {
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
        )
      })}

      <div 
        className="page-number"
        onClick={() => getCharacters(goToPage(incrementPage), incrementPage)}
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