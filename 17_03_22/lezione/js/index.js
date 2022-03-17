6
const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
    "The runnEr",
];

const upper = movies.map((element) => element.toUpperCase());
console.log(movies, upper);

const fourChars = movies.filter((element) => element.length === 4);
console.log(movies, fourChars);

const noPulp = movies.filter(
    (element) => element.toLowerCase() !== "pulp fiction"
);
console.log(movies, noPulp);

const noSecond = movies.filter((element, index) => index !== 1);
console.log(movies, noSecond);

const onlyRunner = movies.filter((element) =>
    element.toLowerCase().includes("runner")
);
console.log(movies, onlyRunner);

// element
//  .toLowerCase()
//  .includes("runner")
// -----
// const lower = element.toLowerCase();
// lower.includes("runner")

const upperDune = movies
    .filter((element, index) => index === 1)
    .concat(onlyRunner)
    .map((element) => element.toUpperCase());

console.log(upperDune);