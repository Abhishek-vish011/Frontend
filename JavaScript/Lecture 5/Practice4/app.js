function printTable(n){
    console.log(`Enter of Number Table: ${n}`);
    for(let i=1;i<=10;i++){
        console.log(`${n} * ${i} : ${i*n}`);
    }
}

printTable(2);
printTable(5);
printTable(15);