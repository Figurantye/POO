import { ArrayList } from "./ArrayList";

const list = new ArrayList()

list.add('pirulito')
list.add('bala')
list.add('chiclete')
list.add('goma')

console.log('array list inicial:', list);
list.addFirst('primeiro')
console.log('addFirst list:', list);
list.addAt(3, 'index')
console.log('addAt list:', list);
list.remove('chiclete')
console.log('remove list:', list);
list.removeFirst()
console.log('removeFirst list:', list);
list.removeLast
console.log('removeLast list:', list);
list.removeAt(1)
console.log('get list:', list.get(0));
console.log('indexOf list:', list.indexOf(0));
console.log('isEmpty list:', list.isEmpty());
console.log('size list:', list.size());