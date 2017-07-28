import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import * as util from "./lib/utilityFunctions";

function PrintBookInfo(item: Book): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

let [book1, book2] = util.GetAllBooks();

PrintBookInfo(book1);

let booksToRead: Book[];


// PrintBookInfo(book1);
// PrintBookInfo(book2);

function printAllBooks([book1, book2, ...others]:Book[]): void {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    booksToRead.push(...others);
}

// printAllBooks(util.GetAllBooks());

// let {title, author} = book1;
// console.log(title);
// console.log(author);