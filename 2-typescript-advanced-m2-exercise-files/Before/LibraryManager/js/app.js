"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./lib/utilityFunctions");
function PrintBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
PrintBookInfo(book1);
var booksToRead;
// PrintBookInfo(book1);
// PrintBookInfo(book2);
function printAllBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    booksToRead.push.apply(booksToRead, others);
}
// printAllBooks(util.GetAllBooks());
// let {title, author} = book1;
// console.log(title);
// console.log(author); 
//# sourceMappingURL=app.js.map