import { Bird } from "./Bird";
import { Mammal } from "./Mammal";
import { Animal } from "./Animal";
const mam = new Mammal(`bear`, 20, `cinza`)
console.log(`nome: ${mam.getName()}, idade: ${mam.getAge()}, pelo: ${mam.getCoat()}`);
mam.emitSound(`uuugrhh`)
mam.breastfood()

const bird = new Bird(`Arara`, 2, 10)
console.log(`nome: ${bird.getName()}, idade: ${bird.getAge()}, envergadura: ${bird.getWingspan()}`);
bird.emitSound(`piupiu`)
bird.fly()