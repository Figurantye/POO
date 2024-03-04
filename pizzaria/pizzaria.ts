import { Pizza } from "./Pizza";
import { SaborPizza } from "./SaborPizza";

const calabresa = new Pizza(SaborPizza.CALABRESA, 40.00, 45)
const pepperoni = new Pizza(SaborPizza.PEPPERONI, 50.00, 45)
const portuguesa = new Pizza(SaborPizza.PORTUGUESA, 45.00, 45)
const bacon = new Pizza(SaborPizza.BACON, 40.00, 45)
const doce = new Pizza(SaborPizza.DOCE, 50.00, 45)

console.log(calabresa.descricao());
