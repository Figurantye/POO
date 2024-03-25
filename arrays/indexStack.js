"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var arrStack = new Stack_1.Stack();
arrStack.isEmpty();
arrStack.push('lsd');
arrStack.push('heroina');
arrStack.push('maconha');
arrStack.push('cocaina');
console.log('arry stack:', arrStack);
console.log('stack peek:', arrStack.peek());
console.log('stack pop:', arrStack.pop());
console.log('stack isEmpty:', arrStack.isEmpty());
console.log('stack size:', arrStack.size());
console.log('arry final:', arrStack);
