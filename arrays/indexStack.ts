import { Stack } from "./Stack";

const arrStack = new Stack()

arrStack.isEmpty()
arrStack.push('lsd')
arrStack.push('heroina')
arrStack.push('maconha')
arrStack.push('cocaina')

console.log('arry stack:',arrStack);
console.log('stack peek:',arrStack.peek());
console.log('stack pop:',arrStack.pop());
console.log('stack isEmpty:',arrStack.isEmpty());
console.log('stack size:',arrStack.size());
console.log('arry final:',arrStack);
