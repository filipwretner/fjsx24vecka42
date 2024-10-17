let book = {
    title: "Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 500,
    isAvailable: true
};

function printBookInfo() {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Antal sidor: ${book.pages}`);
    console.log(`Tillgänglig: ${book.isAvailable}`);
}

printBookInfo();

book.isAvailable = false;

console.log("Efter uppdatering");
printBookInfo();