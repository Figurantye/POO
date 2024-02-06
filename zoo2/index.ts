import { Bird } from "./Bird";
import { Mammal } from "./Mammal";
const mam = new Mammal(`bear`, 20, `white`)

const bird = new Bird(`macaw`, 2, 10)

mam.info()
bird.info()
console.log(`info updated`);
mam.infoUpdate()
bird.infoUpdate()