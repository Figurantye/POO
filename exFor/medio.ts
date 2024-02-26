let primo:number[] = [5, 12, 8, 14, 3, 20, 31]

for(let i:number = 0; i < primo.length; i++){
    if (primo[i] == 2){
        console.log(`${primo[i]} é primo`);
    } else if (primo[i] % 2 == 0){
        console.log(`${primo[i]} não é primo`);
    } else if (primo[i] == 3){
        console.log(`${primo[i]} é primo`);
    } else if (primo[i] % 3 == 0){
        console.log(`${primo[i]} não é primo`);
    } else {
        console.log(`${primo[i]} é primo`);
    }
}

