import React, { useState } from 'react'

const PaginationOnFruit = () => {
    const fruits = [
  "Apple", "Banana", "Mango", "Orange", "Grapes",
  "Pineapple", "Kiwi", "Strawberry", "Papaya", "Cherry",
  "Guava", "Watermelon", "Peach", "Lemon", "Pomegranate"
];

const itemsPerPage = 5;
const [currentPage,setCurrentPage] = useState(1)

 const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = fruits.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(fruits.length / itemsPerPage);



  return (
    <>
    <div>PaginationOnFruit</div>
  {currentItems.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}


 <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              background: currentPage === i + 1 ? "black" : "",
              color: currentPage === i + 1 ? "white" : ""
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

</>
  )
}

export default PaginationOnFruit