import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'Book A',
        'Book B',
        'Book C',
    ]

    const books =[
        {
        title: "Book A",
        author: "Martin",
        pages: 415,
        },
        {
        title: "Book B",
        author: "Michael",
        pages: 200,
        },
        {
        title: "Book C",
        author: "Donna",
        pages: 515,
        },



        ]


  return (
    <div>
        {bookList.map( book => {
            return <h2>{book}</h2>
        })}
        <hr />
        {
            books.map(books => {
                return (
                    <div>
                    <h5>{books.title}</h5>
                    <p>{books.author}</p>
                    <p>{books.pages}</p>
                    </div>
                )
            })
        }

        <hr />

        {/* in Book.js */}
        {
         books.map(book => {
            return <Book book={book}/>
         })
        }
    </div>
  )
}

export default RenderingLists