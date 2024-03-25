import { Queue } from "./Queue";

const queue = new Queue();

queue.enqueue('cheias de charme')
queue.enqueue('terra e paixao')
queue.enqueue('imperio')
queue.enqueue('avenida brasil')

console.log('array queue inicial:', queue);
console.log('queue dequeue:', queue.dequeue());
console.log('queue peek:', queue.peek());
console.log('queue getSize:', queue.getSize());
console.log('queue isEmpty:', queue.isEmpty());
console.log('array queue final:', queue);