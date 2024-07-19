// Day 7 OBJECTS
// Task 1

let book = {
    author: "coder",
    title: "how to code",
    year: "1961"
}

console.log(book)

// Task 2

console.log(book.author, book.title)

// Task 3

const books = {
    author: "shiv",
    title: "life",
    years: "1969",
    book: function () {
        return this.author + "" + this.title;
    }
}

console.log(books.book())

// Task 4

books.years = "1999"
console.log(books)

// Task 5

const library = {
    name: "name1",
    books: [
        {"title":"world",
        "author":["person1", "person3"],
        "year":"1900"},
        
        {"title":"hell",
        "author":["person2","person4"],
        "year":"1950"}
        ]
    }


console.log(library.books)

// Task 6

/*const library = {
    name: "name1",
    books: [
        {"title":"world"},
        {"author":["person1", "person3"],
        "year":"1900"},
        
        {"title":"hell0"},
        {"author":["person2","person4"],
        "year":"1950"}
        ]
}
console.log(library.books[0])    
console.log(library.books[2])
console.log(name)*/

// Task 7

const boook = {
    "title": "lol",
    "year": "1980",
    "writer": "huh",
    "bookinfo": function () {
        return this.title + "" + this.year;
    }
}
console.log(boook.bookinfo())

// Task 8

const bookss = {
    "title": "lol",
    "year": "1980",
    "writer": "huh"
}
let txt = ""
for(let key in bookss){
    txt += bookss[key];
}
console.log(txt)

// Task 9

const value =  Object.values(bookss)
const key = Object.keys(bookss)

console.log(value)
console.log(key)