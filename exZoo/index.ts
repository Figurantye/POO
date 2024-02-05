import { Bird } from "./Bird";
import { Mammal } from "./Mammal";
const mam = new Mammal(`bear`, 20, `white`)
console.log(`name: ${mam.getName()}, age: ${mam.getAge()}, coat: ${mam.getCoat()}`);
mam.emitSound(`uuugrhh`)
mam.breastfood()

const bird = new Bird(`macaw`, 2, 10)
console.log(`name: ${bird.getName()}, age: ${bird.getAge()}, wingspan ${bird.getWingspan()}`);
bird.emitSound(`piupiu`)
bird.fly()

console.log(`updated info:`);
mam.setAge(14)
mam.setName(`elephant`)
mam.setCoat(`gray`)
console.log(`name: ${mam.getName()}, age: ${mam.getAge()}, coat: ${mam.getCoat()}`);

bird.setAge(4)
bird.setName(`parrot`)
bird.setWingspan(7)
console.log(`name: ${bird.getName()}, age: ${bird.getAge()}, wingspan ${bird.getWingspan()}`);