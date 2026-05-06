const books = [
  {
    title: "The Subtle Art Of Not Giving A F*ck",
    authorName: "Mark Manson",
    releaseYear: 2016
  },
  {
    title: "The Family Remains",
    authorName: "Lisa Jewell",
    releaseYear: 2022
  },
  {
    title: "Private Dublin",
    authorName: "James Patterson",
    releaseYear: 2025
  },
  {
    title: "Can't Hurt Me",
    authorName: "David Goggins",
    releaseYear: 2018
  },
  {
    title: "Four Eids And A Funeral",
    authorName: "Adiba Jaigirdar",
    releaseYear: 2024
  }
];

function sortByYear(book1, book2) {

  if(book1["releaseYear"] > book2["releaseYear"]) {
    return 1
  } else if(book1["releaseYear"] < book2["releaseYear"]) {
    return -1
  } else {
    return 0
  }

}

function latestDecade(collection) {
  return collection.releaseYear <= 2020;
}

const filteredBooks = books.filter(latestDecade);
filteredBooks.sort(sortByYear);

console.log(filteredBooks);
