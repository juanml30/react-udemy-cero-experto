import { getHeroById } from "./bases/07-importAndExport";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first");
    const heroe = getHeroById(9);
		if (heroe===undefined) {
			reject("I cant find the hero");
		} else{
			resolve(heroe);
		}
  }, 2000);
});

promesa
  .then((heroe) => console.log("Heroe ", heroe))
  .catch((err) => console.warn(err));
 */

const getHeroByIdSync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first");
      const heroe = getHeroById(id);
      heroe === undefined ? reject("I cant find the hero") : resolve(heroe);
    }, 2000);
  });
};

getHeroByIdSync(3).then(console.log).catch(console.warn);
