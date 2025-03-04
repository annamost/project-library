/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure to create
some properties that is possible to filter and sort.

Remember to remove code you don't need.
*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: './books-images/harry-potter-and-the-sorcerer.jpg'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]


// now we need to add one of these book containers for each new book 
// first we get the elements 
const libraryContainer = document.getElementById('library-container')

// now we make a function where we create a book container for each book 
const largeKey = ['author']
const mediumKey = ['genre', 'rating']
const smallKey = ['description']


const displayBooks = (book) => {
  // Here we have the overall container that will be added to the library part 
  let bookContainer = document.createElement('div')
  // now we make another div for the picutre and title 
  let coverContainer = document.createElement('div')
  // This is one for the author and ratings etc
  let authorInfoContainer = document.createElement('div')
  // And one for the paragrap
  let descriptionContainer = document.createElement('div')


  let bookCover = document.createElement('img')
  let bookTitle = document.createElement('h2')
  let bookTitleText = document.createTextNode(book.title)


  // this is for the general styling
  bookContainer.className = 'book-container'
  coverContainer.className = 'cover-container'
  authorInfoContainer.className = 'author-info-container'
  descriptionContainer.className = 'description-container'

  bookCover.setAttribute('src', book.image)

  coverContainer.appendChild(bookCover)

  bookTitle.appendChild(bookTitleText)
  coverContainer.appendChild(bookTitle)
  bookContainer.appendChild(coverContainer)


  for (const key in book) {
    // console.log(book[key])
    if (largeKey.includes(key)) {
      let bookTextLarge = document.createElement('h3')
      bookTextLarge.appendChild(document.createTextNode(`${book[key]} (${book.year})`))
      authorInfoContainer.appendChild(bookTextLarge)
    } else if (mediumKey.includes(key)) {
      let bookTextMedium = document.createElement('h4')
      bookTextMedium.appendChild(document.createTextNode(`${key}: ${book[key]}`))
      authorInfoContainer.appendChild(bookTextMedium)
    } else if (smallKey.includes(key)) {
      let bookTextP = document.createElement('p')
      bookTextP.appendChild(document.createTextNode(book[key]))
      descriptionContainer.appendChild(bookTextP)
    }
  }

  bookContainer.appendChild(authorInfoContainer)
  bookContainer.appendChild(descriptionContainer)


  libraryContainer.appendChild(bookContainer)
}

const sortingBooks = (keyName) => {
  books.sort((a, b) => String(a[keyName]).localeCompare(String(b[keyName])))

}

books.forEach(displayBooks)

// we have different buttons for filtering and for sorting
//  I think for sorting I could keep the author year and rating 
// for filtering i should have a selector though... for genre for example
const authorButton = document.getElementById('author-sort')

const sortByContainer = document.getElementById('sort-by')

sortByContainer.addEventListener('click', function (event) {
  let targetButton = event.target

  let buttonName = targetButton.id
  let sortKeyName = buttonName.split('-')[0]

  sortingBooks(sortKeyName)

  while (libraryContainer.hasChildNodes()) {
    libraryContainer.removeChild(libraryContainer.firstChild)
  }
  books.forEach(displayBooks)

  let allButtons = document.querySelectorAll('button')
  // let allButtonArray = Array.from(sortByContainer)
  // let nonTargetButtons = allButtonArray.filter(element => element != target)


  allButtons.forEach((btn) => {
    btn.classList.remove('clicked-button')
  })

  targetButton.classList.toggle('clicked-button')

})
const selectFilter = document.getElementById('genre-select')


selectFilter.addEventListener("click", () => {
  while (libraryContainer.hasChildNodes()) {
    libraryContainer.removeChild(libraryContainer.firstChild)
  }

  if (selectFilter.value === 'All') {
    books.forEach(displayBooks)
  } else {
    // now I will filter for the books that have the right genre. 
    let filterBooks = books.filter((book) => {
      return book.genre === selectFilter.value
    })
    filterBooks.forEach(displayBooks)
  }

});

// const getOption = () => {
//   selectElement = document.querySelector('#genre-select')
//   output
// }

// make the loading the buttons maybe as a function so then i can can add it to the different buttons...
// with the filter i could maybe have a drop down with one of them being none?
// maybe i can have all the buttons listen to the other buttons to control the colors?
// i could mkae the color switch be like a class switch
// and then each button could use the same searching functoin just by given the key basically
// the filtering could maybe be a drop down menue? or different checkmarks? and then you make a subarray with the right genres... then you could have multiple genres selected... could be nice... 
