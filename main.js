

//okay, so the aim is to have a factory take inputs and display it to the user. 

//factory review

function thisIsAFactory(name, age){
    
    return{
        name: name,
        age: age,
        saying: function(){
            console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
        }
    }
}


// Library remake

//have a factory to set up the library genres 

function newBook(title, author, pages){

    return{
        title: title,
        author: author,
        pages: pages
    }
}


//have an array to store all the books

let libraryStorage = [];

//show 3 examples

let example1 = newBook("George Shirnks", "some guy", "30");
let example2 = newBook("The 48 laws of power", "some other guy", "400");
let example3 = newBook("The 5 love languages", "even another guy", "100");

//push all the examples into the library storage array

libraryStorage.push(example1);
libraryStorage.push(example2);
libraryStorage.push(example3);

//have something to show the newer additions to the dom

function testNewBook(){
    let bookTitle = prompt("choose a title");
    let bookauthor = prompt("now choose an author");
    let bookpages = prompt("now choose a number");
    let testingNewBook = newBook(bookTitle, bookauthor, bookpages);
    libraryStorage.push(testingNewBook);
    return {
        testingNewBook
    }
}


//ES6 Modules on "The Odin Project"

