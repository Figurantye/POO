for(let i = 10; i >= 0; i--){
    if(i === 0){
        console.log(`BOOOM!!`);
    } else if(i % 2 === 0){
        console.log(`${i}\ntic`);
    } else {
        console.log(`${i}\ntac`);
    }
}

for (let i:string = 'a'; i!= 'abababa'; i+= 'ba'){
    console.log(i);
}