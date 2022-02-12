import { heroes, owners } from "./data/heroes";

console.log(heroes);
console.log(owners);

const getHeroById = (id) => heroes.find((element) => element.id === id);

console.log(getHeroById(2));

const getHeroByOwner = (owner) => heroes.filter((element) => element.owner === owner);

console.log(getHeroByOwner("DC"))