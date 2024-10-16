let favouriteMovies = ["Evil Dead", "The Thing", "Frozen"];

favouriteMovies.push("Halloween");

favouriteMovies[2] = "Nightmare on Elms Street";

console.log("Antal filmer: ", favouriteMovies.length);
console.log("Alla filmer:");
for (let movie of favouriteMovies) {
    console.log(movie);
}
